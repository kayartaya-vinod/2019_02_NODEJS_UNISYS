
var hello = function () {
    console.log('Hello, again!');
    // 'arguments' is not allowed in arrow functions
    console.log('You supplied', arguments, 'as arguments');
    console.log('argumengs[0]', arguments[0]);
    console.log('argumengs[1]', arguments[1]);
}

hello('Vinod', 'Bangalore');

// function hello() {
//     console.log('Hello, world!');
// }
