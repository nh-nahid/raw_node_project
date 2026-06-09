// Title: 

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
const { sendTwilioSms } = require('./helpers/notifications')
// app object - scaffolding
const app = {};


// app config
// sendTwilioSms('01617121519', 'Hello world', (err) => {
//     console.log(`This is the error`, err);
    
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