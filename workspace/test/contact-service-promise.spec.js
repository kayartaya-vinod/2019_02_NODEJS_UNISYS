const ContactService = require('../service/contact-service-promise');
const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;
const should = chai.should();
const filename = path.join(__dirname, '..', 'service', 'contacts.json');

describe('Testing ContactService promise based operations', function () {

    let service;

    beforeEach(function () {
        let contacts = [{
            "id": 1,
            "name": "Billi Ledwich",
            "email": "bledwich0@nsw.gov.au",
            "phone": "8543962712",
            "city": "Tangkil"
        }, {
            "id": 2,
            "name": "Mohammed Wanne",
            "email": "mwanne1@google.com.br",
            "phone": "5384671919",
            "city": "Yaring"
        }, {
            "id": 3,
            "name": "Robinet Gimlet",
            "email": "rgimlet2@themeforest.net",
            "phone": "7627151464",
            "city": "Matos da Ranha"
        }, {
            "id": 4,
            "name": "Ezechiel Buche",
            "email": "ebuche3@hud.gov",
            "phone": "4832249761",
            "city": "Guocun"
        }];

        fs.writeFileSync(filename, JSON.stringify(contacts));
        service = new ContactService();
    });

    it('should get contact with id 2', function () {

        // service.getById(2)
        // .then(function(data){
        //     data.should.have.property('name').to.equal('Mohammed Wanne');
        //     done();
        // })

        return Promise.all([
            service.getById(2).should.eventually
            .have.property('name').to.equal('Mohammed Wanne'),

            service.getById(2).should.eventually
            .have.property('email').to.equal('mwanne1@google.com.br')
        ]);

    });
});