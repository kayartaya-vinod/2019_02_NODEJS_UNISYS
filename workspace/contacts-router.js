const express = require('express');
const router = express.Router();
const { getAllContacts, getOneContact, addNewContact } = require('./controllers/contacts-controller');

router.get('/api/contacts/', getAllContacts);
router.get('/api/contacts/:id', getOneContact);
router.post('/api/contacts/', addNewContact);

module.exports = router;