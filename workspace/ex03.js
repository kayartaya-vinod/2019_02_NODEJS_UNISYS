const p1 = {
    name: 'vinod',
    email: 'vinod@vinod.co',
    city: 'bangalore',
    country: 'India'
};

// let name = p1.name;
// let email = p1.email;

// object destructuring along with the rest (...) operator
let { email, name, state, ...p2 } = p1
// p2 will recieve the rest of the properties apart from email, name, state from p1

console.log('Name of the person is', name);
console.log('Email of the person is', email);
console.log('State of the person is', state);
console.log('p2', p2);

const sayHello = function ({ name, city }) {
    console.log(`Hello ${name}, how's weather in ${city}?`);
}

sayHello(p1);