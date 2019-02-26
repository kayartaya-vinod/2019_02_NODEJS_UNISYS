// name of the file is the name of the module to import

// if the name of the file is index.js and is in a folder
// then the name of the folder itself is the name of the module

// the name of this module is './my-utils', relative to ex*.js files

const sleep = require('../sleep');

const runWithDelay = (callback, duration = 1000) => {

    if (typeof callback != 'function') {
        throw 'callback was not supplied or was not a function';
    }
    if (typeof duration != 'number') {
        throw 'duration must be a number, recieved ' + duration;
    }


    sleep(duration);
    callback();
}

console.log('index.js from my-utils loaded into vm');
module.exports = { runWithDelay }