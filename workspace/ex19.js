const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync('mysite.pem'),
    cert: fs.readFileSync('mysite.crt')
};

const server = https.createServer(options, (req, resp) => {

    resp.end('It works!');
});

server.listen(2345, () => console.log('server started at port 2345'));