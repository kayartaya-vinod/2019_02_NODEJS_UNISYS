class ContactService {

    constructor() {
        this.contacts = [{
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
    }

    getAll() {
        return [...this.contacts]; // new array with values from this.contacts
    }

    getById(id) {
        if (typeof id != 'number') {
            throw new Error('a number must be supplied as id');
        }

        let c = this.contacts.find(c => c.id === id);
        if (c === undefined) {
            return null;
        }
        return { ...c }; // the contact object in the array is immutable
    }

    deleteContact(id) {
        if (typeof id != 'number') {
            throw new Error('a number must be supplied as id');
        }
        let index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            throw new Error('Invalid id supplied for deletion');
        }
        this.contacts.splice(index, 1);
    }

    addNewContact(contact) {
        if (typeof contact != 'object') {
            throw new Error('contact must be supplied as an object');
        }

        let requiredFields = ['name', 'email', 'phone'];
        let missingFields = [];

        requiredFields.forEach(fld => {
            if (!(fld in contact)) { // check fld in contact's keys
                missingFields.push(fld);
            }
        });
        contact.id = Math.max(...this.contacts.map(c => c.id)) + 1;
        this.contacts.push({ ...contact });
    }

}

module.exports = ContactService;