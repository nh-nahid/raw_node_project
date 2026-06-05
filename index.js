// Title: 

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - scaffolding
const app = {};

// app config
app.config = {
    port: 3000,
}
// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`lestening to port ${app.config.port}`);
    })
}

// handle request response
app.handleReqRes = handleReqRes;

app.createServer()