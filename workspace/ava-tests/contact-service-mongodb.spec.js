import service from '../service/contact-service-mongodb';
import test from 'ava';

test('test if ContactService has all required members', t => {

    t.true(typeof service === 'object');
    t.truthy(service.addNewContact);
    t.truthy(service.getAll);
    t.truthy(service.getById);
});

test('getAll() should return 1006 contacts', async t => {

    let contacts = await service.getAll();
    t.is(contacts.length, 1006);

});