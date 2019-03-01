const { Application } = require('spectron');
const path = require('path');
const { expect } = require('chai');

describe('testing the electron react app', function () {

    this.timeout(30000);

    // this is equivalent of typing the command "electorn ." on the command prompt
    const app = new Application({
        path: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
        args: [path.join(__dirname, '..')]
    });

    beforeEach(async function () {
        await app.start();
    });

    afterEach(async function () {
        await app.stop();
    });

    it('should check the title of the app', async function () {
        let title = 'Addressbook app - v1.0';
        let { client } = app;

        let h1value = await client.$('h1').getText();
        expect(h1value).to.equal(title);
    });


    it('should not add an empty contact', async function () {
        let { client } = app;

        let cards = await client.$$('div.col-md-7 div.card');
        let cardsCountBefore = cards.length;

        let listItemsBefore = await client.$$('form.form ~ ul > li');
        expect(listItemsBefore.length).to.equal(0);

        // await client.$('button.btn.btn-primary').click();
        await client.click('button.btn.btn-primary');

        cards = await client.$$('div.col-md-7 div.card');
        let cardsCountAfter = cards.length;

        expect(cardsCountAfter).to.equal(cardsCountBefore);

        let listItemsAfter = await client.$$('form.form ~ ul > li');
        expect(listItemsAfter.length).to.equal(3);
    });


    it('should not add a contact with out email/phone', async function () {
        let { client } = app;

        let cards = await client.$$('div.col-md-7 div.card');
        let cardsCountBefore = cards.length;

        let listItemsBefore = await client.$$('form.form ~ ul > li');
        expect(listItemsBefore.length).to.equal(0);

        // await client.setValue('input[type=text][name=name]', 'Vinod');
        await client.$('input[type=text][name=name]').setValue('Vinod');

        // await client.$('button.btn.btn-primary').click();
        await client.click('button.btn.btn-primary');

        cards = await client.$$('div.col-md-7 div.card');
        let cardsCountAfter = cards.length;

        expect(cardsCountAfter).to.equal(cardsCountBefore);

        let listItemsAfter = await client.$$('form.form ~ ul > li');
        expect(listItemsAfter.length).to.equal(2);
    });


    it('should add a contact with name/email/phone', async function () {
        let { client } = app;

        let cards = await client.$$('div.col-md-7 div.card');
        let cardsCountBefore = cards.length;

        let listItemsBefore = await client.$$('form.form ~ ul > li');
        expect(listItemsBefore.length).to.equal(0);

        // await client.setValue('input[type=text][name=name]', 'Vinod');
        await client.$('input[type=text][name=name]').setValue('Vinod');
        await client.$('input[type=text][name=email]').setValue('vinod@vinod.co');
        await client.$('input[type=text][name=phone]').setValue('9731424784');
        await client.$('input[type=text][name=picture]').setValue('https://avatars3.githubusercontent.com/u/14976510');

        // await client.$('button.btn.btn-primary').click();
        await client.click('button.btn.btn-primary');

        cards = await client.$$('div.col-md-7 div.card');
        let cardsCountAfter = cards.length;

        expect(cardsCountAfter).to.equal(cardsCountBefore + 1);

        let listItemsAfter = await client.$$('form.form ~ ul > li');
        expect(listItemsAfter.length).to.equal(0);
    });

    it('should delete a contact card', async function () {
        let { client } = app;
        let cards = await client.$$('div.col-md-7 div.card');
        let cardsCountBefore = cards.length;

        await client.$('div.card:nth-child(2)  button').click();

        cards = await client.$$('div.col-md-7 div.card');
        let cardsCountAfter = cards.length;

        expect(cardsCountAfter).to.equal(cardsCountBefore - 1);
    });
});