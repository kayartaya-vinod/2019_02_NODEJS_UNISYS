const p1 = {
    name: 'vinod',
    email: 'vinod@vinod.co'
};

let p2 = p1;
// two references to one object
// mutating p2 will affect p1

// spread operator
let p3 = { ...p1, email: 'kumar@vinod.co' }; // creates a new object, and copies all properties of p1

p2.city = 'Bangalore';
p3.country = 'India';

console.log('p1 is', p1);
console.log('p2 is', p2);
console.log('p3 is', p3);
