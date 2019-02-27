const ContactService = require('./service/contact-service-promise');
const service = new ContactService();

console.log('start of ex10.js');

service.getById(3)
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log('end of ex10.js');