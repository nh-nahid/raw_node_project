// Title: 

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
// app object - scaffolding
const app = {};


// app config

    
// })
// data.delete('test', 'newFile', (err) => {
//     console.log( err);
    
// })
// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`lestening to port ${environment.port}`);
    })
}

// handle request response
app.handleReqRes = handleReqRes;

app.createServer()