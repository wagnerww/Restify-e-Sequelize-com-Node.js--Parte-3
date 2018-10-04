const model = require('../models/pessoasModel');

function buscarPessoas(){
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err};`);
        })
    });
}

module.exports = {buscarPessoas};
