const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const port = 1234;


server.listen(port, () => console.log(`Server started at port ${port}`));