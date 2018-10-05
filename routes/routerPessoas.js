const router   = require('../config/server').server;
const service  = require('../services/pessoas');
const validarToken = require('../config/token');

router.post('/pessoas', (request, response, next) => {    
    if (validarToken(request.header('token'))){        
        service.buscarPessoas(request.body.skip, request.body.limit).then(data => {
            response.send(200, retornos(true, 'busca realizada',data));
        }).catch(err => {
            response.send(503, retornos(true, 'falha ao buscar',err));
        })
    } else {
        response.send(403);
    }
    next();
});

router.post('/insertPessoa', (request, response, next) => {
    service.insertPessoa(request.body).then(data => {
        response.send(200, 'Pessoa inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updatePessoa', (request, response, next) => {
    service.updatePessoa(request.body).then(data => {
        response.send(200, 'Pessoa atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deletePessoa', (request, response, next) => {
    service.deletePessoa(request.body).then(data => {        
        response.send(200, retornos(true, 'Pessoa excluída com sucesso',data));
    }).catch(err => {
        response.send(400, retornos(false, 'falha ao excluída com sucesso',err));
    })
    next();
});

function retornos(success, msg, data){    
    const retorno = {
        success: success,
        message: msg,
        details: data
    }        
    return retorno;
}

module.exports = router;
