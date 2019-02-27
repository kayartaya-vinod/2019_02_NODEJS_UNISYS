const ContactService = require('../service/contact-service-async');
const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, '..', 'service', 'contacts.json');

describe('Testing Async version of ContactService', function () {

    let service;

    beforeEach(function(){
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

    it('should get contact for id 1', function(done){

        service.getById(1, function(err, data) {
            expect(data).to.be.a('object')
                .to.have.property('name')
                .to.equal('Billi Ledwich');

            done();
        })
    });

});