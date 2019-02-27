const http = require('http');

const options = {
    hostname: 'kvinod.com',
    method: 'GET'
};

console.log('start of ex13.js');

const req = http.request(options, (resp) => {
    console.log('resp.statusCode = ', resp.statusCode);
    console.log('resp.statusMessage = ', resp.statusMessage);

    let responseText = '';
    let count = 0;
    resp.on('data', chunk => {
        responseText += chunk;
        count++;
    });

    resp.on('end', () => {
        console.log('Total chunks =', count);
        console.log(responseText);
    });
});

req.end();

console.log('end of ex13.js');
