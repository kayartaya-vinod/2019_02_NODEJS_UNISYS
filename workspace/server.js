const express = require('express');
const app = express();
const port = 1234;
const { getAllContacts, getOneContact } = require('./controllers/contacts-controller');


app.get('/api/contacts/', getAllContacts);
app.get('/api/contacts/:id', getOneContact);


app.listen(port, () => console.log(`Server started at port ${port}`));