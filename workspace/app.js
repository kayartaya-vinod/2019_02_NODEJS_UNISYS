const express = require('express');

const app = express();
app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    resp.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
})

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const contactsRouter = require('./contacts-router');
app.use(contactsRouter);

module.exports = app;