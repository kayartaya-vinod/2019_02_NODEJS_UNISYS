const ContactService = require('../service/contact-service');
const assert = require('assert');
const { expect } = require("chai");

// defines a new test suite
describe('Testing ContactService class functions', function () {

    let service;

    // nested suite for a particular function
    describe('Testing getAll() method', function () {

        beforeEach(function () {
            service = new ContactService();
        });

        it('should get 4 contacts', function () {
            let contacts = service.getAll();
            assert.equal(contacts.length, 4);
        })

    });

    describe('Testing getById() method', function(){

        beforeEach(function(){
            service = new ContactService();
        }); 

        it('should get an existing contact', function(){
            let c = service.getById(1);
            expect(c).to.be.a('object');
            expect(c).to.have.property('name').to.equal('Billi Ledwich');
        });
    });
}); 
