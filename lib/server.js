// Title: 

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');

// server object - scaffolding
const server = {};

// server config
server.config = {
    port: 3000,
}

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(server.config.port, () => {
        console.log(`lestening to port ${server.config.port}`);
    })
}

// handle request response
server.handleReqRes = handleReqRes;

server.init = () => {
    server.createServer();
}     

module.exports = server;