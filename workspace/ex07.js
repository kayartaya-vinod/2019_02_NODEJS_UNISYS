const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'sleep.js');

console.log('start of ex07.js');
// sync / blocking call
// const data = fs.readFileSync(filename, 'utf-8');
// console.log(data);

fs.readFile(filename, 'utf-8', (err, data) => { 
    if(err) throw err;
    console.log(data);
});

console.log('end of ex07.js');