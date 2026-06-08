
// dependencies
const { sampleHandler } = require('./helpers/routeHandlers/sampleHandler');
const { userHandler } = require('./helpers/routeHandlers/userHandler');
const { tokenHandler } = require('./helpers/routeHandlers/tokenHandler');

const routes = {
    sample: sampleHandler, 
    user: userHandler,
    token: tokenHandler,
}

module.exports = routes;