const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';

// module.exports.getById = (id) => new Promise((resolve, reject) => { });

module.exports.getById = (id) => new Promise((resolve, reject) => {
    if (typeof id != 'string') {
        reject('Id must be supplied as a string');
    }

    try {
        id = ObjectId(id);
    }
    catch (err) {
        reject(err);
    }

    MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
        if (err) reject(err);

        const unisysdb = conn.db('unisysdb');
        const contacts = unisysdb.collection('contacts');
        contacts.findOne({ _id: id }, (err, data) => {
            conn.close();

            if (err) reject(err);
            resolve(data);
        });
    });
});

module.exports.getAll = () => new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
        if (err) reject(err);

        const unisysdb = conn.db('unisysdb');
        const contacts = unisysdb.collection('contacts');

        contacts.find().toArray((err, data) => {
            conn.close();
            if (err) reject(err);
            resolve(data);
        })
    });
});


module.exports.getByCity = (city) => new Promise((resolve, reject) => {

    if (typeof city != 'string') {
        reject('City must be supplied as a string');
    }

    MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
        if (err) reject(err);

        const unisysdb = conn.db('unisysdb');
        const contacts = unisysdb.collection('contacts');

        contacts.find({ city }).toArray((err, data) => {
            conn.close();
            if (err) reject(err);
            resolve(data);
        })
    });
});

module.exports.addNewContact = (contact) => new Promise((resolve, reject) => {
    if (typeof contact != 'object') {
        reject('contact must be supplied as an object');
    }
    let requiredFields = ['name', 'email', 'phone'];
    let missingFields = [];
    requiredFields.forEach(fld => {
        if (!(fld in contact)) { // check fld in contact's keys
            missingFields.push(fld);
        }
    });
    if (missingFields.length > 0) {
        reject('required fields missing: ' + missingFields.join());
    }
    MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
        if (err) reject(err);

        const unisysdb = conn.db('unisysdb');
        const contacts = unisysdb.collection('contacts');

        contacts.insertOne(contact, (err, writeResult) => {
            conn.close();
            if (err) reject(err);
            resolve(writeResult.insertedId);
        })
    });
});


module.exports.updateContact = (contact) => new Promise((resolve, reject) => {
    if (typeof contact != 'object') {
        reject('contact must be supplied as an object');
    }
    let requiredFields = ['_id', 'name', 'email', 'phone'];
    let missingFields = [];
    requiredFields.forEach(fld => {
        if (!(fld in contact)) { // check fld in contact's keys
            missingFields.push(fld);
        }
    });
    if (missingFields.length > 0) {
        reject('required fields missing: ' + missingFields.join());
    }

    try {
        contact._id = ObjectId(contact._id);
    }
    catch (err) {
        reject(err);
    }

    MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
        if (err) reject(err);

        const unisysdb = conn.db('unisysdb');
        const contacts = unisysdb.collection('contacts');
        contacts.update(contact, (err) => {
            conn.close();
            if (err) reject(err);
            resolve(contact);
        })
    });
});