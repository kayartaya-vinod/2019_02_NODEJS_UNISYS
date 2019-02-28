const { MongoClient, ObjectId } = require('mongodb');

const host = 'localhost';
const port = 27017
const url = `mongodb://${host}:${port}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, conn) => {
    if (err) throw err;

    const db = conn.db('unisysdb');
    const contacts = db.collection('contacts');

    let c = {
        name: 'John Doe', email: 'johndoe@example.com',
        phone: '5553234112', city: 'Dalls'
    };

    contacts.insertOne(c, (err, writeResult) => {
        if (err) throw err;

        console.log('Data inserted with _id: ', writeResult.insertedId);
        conn.close();
    });

});