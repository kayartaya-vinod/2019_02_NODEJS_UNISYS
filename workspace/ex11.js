const ContactService = require('./service/contact-service-promise');
const service = new ContactService();

let c = {};
c.name = 'Vinod';
c.email = 'vinod@vinod.co';
c.phone = '9731424784';
c.city = 'Bangalore'

service.addNewContact(c)
    .then(c1 => service.getById(c1.id))
    .then(c2 => console.log(c2))
    .catch(err => console.log(err));