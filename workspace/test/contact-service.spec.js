const ContactService = require('../service/contact-service');
const assert = require('assert');
const { expect } = require("chai");
const should = require('chai').should();

// defines a new test suite
// 'x' prefix on a suite or spec marks that for skip
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

        it('should get a contact for id 3', function(){
            let c = service.getById(3);
            c.should.be.a('object');
            c.should.have.property('email').to.equal('rgimlet2@themeforest.net');
        });
    });
}); 
