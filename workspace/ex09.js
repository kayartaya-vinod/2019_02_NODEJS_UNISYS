const ContactService = require('./service/contact-service-async');

const service = new ContactService();

console.log('start of ex09');

service.getById(1, (err, data) => {
    if (err) {
        console.log('There was an error!')
        console.log(err);
    }
    else {
        console.log('Here is your data:')
        console.log(data);
    }
});

console.log('end of ex09');