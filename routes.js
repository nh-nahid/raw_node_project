
// dependencies
const { sampleHandler } = require('./helpers/routeHandlers/sampleHandler');
const { userHandler } = require('./helpers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler, 
    user: userHandler
}

module.exports = routes;