const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'contacts.json');
class ContactService {
    constructor() {
        this.contacts = [];
        if (fs.existsSync(filename)) {
            let data = fs.readFileSync(filename, 'utf-8');
            this.contacts = JSON.parse(data);
        }
    }

    getAll() {
        return new Promise((resolve, reject) => {
            // based on the success of the job here,
            // we call either resolve(data) or reject(error)
            resolve([...this.contacts]);
        });
    }

    getById(id) {
        // return new Promise((resovle, reject) => { });
        return new Promise((resolve, reject) => {
            if (typeof id !== 'number') {
                // triggers the catch handler
                reject('id was not supplied or was not a number');
                // there is no need to call return, since
                // reject will take the control out of this function
            }
            let result = this.contacts.find(c => c.id === id);
            resolve(result);
        });
    }

    addNewContact(contact) {
        return new Promise((resolve, reject) => {
            if (typeof contact != 'object') {
                reject('contact must be supplied as an object');
            }
            let requiredFields = ['name', 'email', 'phone'];
            let missingFields = [];
            requiredFields.forEach(fld => {
                if (!(fld in contact)) { // check fld in contact's keys
                    missingFields.push(fld);
                }
            });
            if (missingFields.length > 0) {
                reject('required fields missing: ' + missingFields.join());
            }

            contact.id = Math.max(...this.contacts.map(c => c.id)) + 1;
            this.contacts.push({ ...contact });
            fs.writeFile(filename, JSON.stringify(this.contacts), (err) => {
                if (err) reject(err);
                else resolve(contact);
            })
        });
    }

    updateContact(contact) {
        return new Promise((resolve, reject) => {
            if (typeof contact != 'object') {
                reject('contact must be supplied as an object');
            }
            let requiredFields = ['id', 'name', 'email', 'phone'];
            let missingFields = [];
            requiredFields.forEach(fld => {
                if (!(fld in contact)) { // check fld in contact's keys
                    missingFields.push(fld);
                }
            });
            if (missingFields.length > 0) {
                reject('required fields missing: ' + missingFields.join());
            }

            let index = this.contacts.findIndex(c => c.id === contact.id);
            if (index === -1) {
                reject('Invalid id supplied for update: ' + contact.id);
            }
            this.contacts[index] = { ...contact };
            fs.writeFile(filename, JSON.stringify(this.contacts), (err) => {
                if (err) reject(err);
                else resolve(contact);
            })
        });
    }

    deleteContact(id) {
        return new Promise((resolve, reject) => {
            if (typeof id !== 'number') {
                reject('id was not supplied or was not a number');
            }

            let index = this.contacts.findIndex(c => c.id === id);
            if (index === -1) {
                reject('Invalid id supplied - ' + id);
            }

            this.contacts.splice(index, 1);
            
            fs.writeFile(filename, JSON.stringify(this.contacts), (err) => {
                if (err) reject(err);
                else resolve();
            })
        })
    }

}

module.exports = ContactService;