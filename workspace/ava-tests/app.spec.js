import test from 'ava';
import app from '../app';
import request from 'supertest';

test('get one contact from /api/contacts', async (t) => {

    t.plan(4);

    const response = await request(app).get('/api/contacts/5c77726115ba9050faaf6765');

    t.is(response.status, 200);
    const c1 = response.body;

    t.regex(c1.name, /ken cordle/i);
    t.is(c1.gender, 'Male');
    t.is(c1.email, 'kcordle3@pbs.org');
});

test('add a new contact', async t => {

    let c1 = {
        name: 'John Doe',
        email: 'jd@example.com',
        phone: '5553838123',
        city: 'Dallas'
    };
    const response = await request(app).post('/api/contacts').send(c1);

    t.is(response.status, 200);
    t.truthy(response.body);
});