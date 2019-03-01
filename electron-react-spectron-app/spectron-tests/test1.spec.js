const assert = require('assert');
const path = require('path');

const { Application } = require('spectron');

const baseDir = path.join(__dirname, '..');
const electronBinary = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');


describe('testing the setup..', function () {
    this.timeout(30000);

    const app = new Application({
        path: electronBinary,
        args: [baseDir]
    });

    beforeEach(async () => {
        await app.start()
        // await app.client.waitUntilWindowLoaded();
    });
    afterEach(() => app.stop());

    xit('should pass...', function () {
        let msg = 'hello';
        assert.equal(msg, 'hello');
    });

    xit('should get the title of the app', async function () {
        let { client } = app;
        let html = await client.getText('h1.alert.alert-info');
        assert.equal(html, 'Addressbook app - v1.0');
    });

    xit('should set the value for name', async function () {
        let { client } = app;
        await client.setValue('input[name=name]', 'Vinod');
        let name = await client.getValue('input[name=name]');
        assert.equal(name, 'Vinod');
    });


    it('should add new contact', async function () {
        let { client } = app;
        let flds = await client.$$('div.card');
        let len1 = flds.length;

        // await client.setValue('input[name=name]', 'Vinod');
        await client.$('input[name=name]').setValue('Vinod');
        await client.setValue('input[name=email]', 'vinod@vinod.co');
        await client.setValue('input[name=phone]', '9731424784');
        await client.click('button');
        let name = await client.getText('div>div.card:nth-child(2) h5.card-title');
        assert.equal(name, 'Vinod');
        flds = await client.$$('div.card');
        let len2 = flds.length;
        assert.equal(len2, len1 + 1);

    });

})