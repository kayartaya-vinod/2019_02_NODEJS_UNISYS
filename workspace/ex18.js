const { getById } = require('./service/contact-service-mongodb');


setTimeout(async () => {

    try {
        let c1 = await getById('5c77726115ba9050faaf6777');
        console.log(c1);
    }
    catch(err) {
        console.log(err);
    }
}, 0);