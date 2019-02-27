// simple server implementation using the http module

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, resp) => {
    console.log('Got a client request for the resource: ', req.url);

    let filename = path.join(__dirname, 'public', req.url.substring(1))
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) resp.end('Invalid url');
        else resp.end(data);
    })

});

const port = 1234;
server.listen(port, () => console.log(`Server is now ready at port ${port}`));
console.log('end of script ex14.js, running via nodemon');
// npm install -g nodemon
// if you install a local copy, use the command: ./node_modules/.bin/nodemon ex14.js