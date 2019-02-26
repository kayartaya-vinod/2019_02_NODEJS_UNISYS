const { runWithDelay } = require('./my-utils');

console.log('starting of ex06.js');

setTimeout(function () {
    console.log('Hello, world!');
}, 0);

runWithDelay(function () {
    console.log('Welcome to Nodejs training');
}, 1000);

console.log('End of ex06.js');