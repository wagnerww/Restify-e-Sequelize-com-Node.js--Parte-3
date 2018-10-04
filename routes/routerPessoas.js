const router   = require('../config/server').server;
const service  = require('../services/pessoas');

router.get('/pessoas', (request, response, next) => {    
    service.buscarPessoas().then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(503, err);
    })
    next();
});


module.exports = router;
