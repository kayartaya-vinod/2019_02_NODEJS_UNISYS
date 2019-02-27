const ContactService = require('./service/contact-service-promise');
const service = new ContactService();

setTimeout(async () => {
    try {
        let contact = await service.getById(2);
        console.log('Name = ', contact.name);
        console.log('City = ', contact.city);
    }
    catch(err) {
        console.log('There was an error: ', err);
    }
}, 0);