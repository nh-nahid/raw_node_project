
// dependencies
const { sampleHandler } = require('./helpers/routeHandlers/sampleHandler');
const { userHandler } = require('./helpers/routeHandlers/userHandler');
const { tokenHandler } = require('./helpers/routeHandlers/tokenHandler');
const { checkHandler } = require('./helpers/routeHandlers/checkHandler');

const routes = {
    sample: sampleHandler, 
    user: userHandler,
    token: tokenHandler,
    check: checkHandler
}

module.exports = routes;