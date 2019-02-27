const express = require('express');
const app = express();
const port = 1234;

app.use(express.static('public'));

app.get('/author-info', (req, resp) => {
    const p1 = { name: 'Vinod', email: 'vinod@vinod.co' };
    p1.phone = '9731424784';

    resp.json(p1); // resp.write(JSON.stringify(p1)); resp.end();
});

app.listen(port, () => console.log(`server started at port ${port}`));