const { MongoClient, ObjectId } = require('mongodb');

const host = 'localhost';
const port = 27017
const url = `mongodb://${host}:${port}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
    if (err) throw err;

    const db = conn.db('unisysdb');
    const contacts = db.collection('contacts');

    contacts.findOne(
        { _id: ObjectId('5c77726115ba9050faaf676c') },
        (err, data) => {
            if (err) throw err;

            console.log(data);
            conn.close();
        });

});