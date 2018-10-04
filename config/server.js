const restify   = require('restify');
const port      = 3000;
const server    = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

module.exports = {server, port};
