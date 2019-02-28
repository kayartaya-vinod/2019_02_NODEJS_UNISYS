const { getAll, getById, getByCity } = require('../service/contact-service-mongodb');

// http://localhost:1234/api/contacts
// http://localhost:1234/api/contacts?city=Jacksonville

module.exports.getAllContacts = async (req, resp) => {
    try {
        let { city } = req.query;
        let contacts = await (city ? getByCity(city) : getAll());
        resp.json(contacts);
    } catch (error) {
        resp.status(500).send('There was an error' + error);
    }
}

module.exports.getOneContact = async (req, resp) => {
    try {
        let c1 = await getById(req.params.id);
        resp.json(c1);
    } catch (error) {
        resp.status(500).send('There was an error' + error);
    }
}