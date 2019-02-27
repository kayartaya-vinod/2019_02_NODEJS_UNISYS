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

    getById(id, callback) {
        if (typeof callback !== 'function') {
            throw new Error('callback is exepcted and must be a function');
        }
        // no more blocking code from here on
        // enclose all your code in an asynchronous call
        setTimeout(() => {
            // the keyword 'this' inside of an arrow function
            // always correspond to the object of this class

            if (typeof id !== 'number') {
                // node's callback patterns says, the error object is
                // passed as the first parameter of the callback
                let err = { code: 1001, message: 'Invalid id or id was not supplied' };
                callback(err);
                return;
            }

            let result = this.contacts.find(c => c.id === id);
            if (!result) result = null;

            // note the first argument is null, indicating that there is no error
            // and the second argument is the expected data from 'getById' function
            callback(null, result);
        }, 0);
    }

    addNewContact(contact, callback) {
        if (typeof callback !== 'function') {
            throw new Error('callback is exepcted and must be a function');
        }

        setTimeout(() => {
            if (typeof contact != 'object') {
                let err = { code: 1002, message: 'contact must be supplied as an object' };
                callback(err);
                return;
            }
            let requiredFields = ['name', 'email', 'phone'];
            let missingFields = [];
            requiredFields.forEach(fld => {
                if (!(fld in contact)) { // check fld in contact's keys
                    missingFields.push(fld);
                }
            });
            if (missingFields.length > 0) {
                let err = { code: 1003, message: 'required fields missing: ' + missingFields.join() };
                callback(err);
                return;
            }

            contact.id = Math.max(...this.contacts.map(c => c.id)) + 1;
            this.contacts.push({ ...contact });
            fs.writeFile(filename, JSON.stringify(this.contacts), (err, status)=>{
                if(err) {
                    callback(err);
                }
                else {
                    callback(null, contact);
                }
            })
        }, 0);
    }
}

module.exports = ContactService;