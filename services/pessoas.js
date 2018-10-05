const model = require('../models/pessoasModel');

function buscarPessoas(skip, limit){
    return new Promise((resolve, reject) => {
        model.findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao buscar pessoas: ${err};`);
            reject(err);
        })
    });
}

function insertPessoa(data){
    return new Promise((resolve, reject) =>{
        model.create(data).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao inserir a pessoa: ${err};`);
            reject(err);
        })
    });
}

function updatePessoa(data){
    return new Promise((resolve, reject) =>{
        model.update(data, {
            where: { id:data.id }
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao editar a pessoa: ${err};`);
            reject(err);
        })
    });
}

function deletePessoa(data){
    return new Promise((resolve, reject) => {       
        model.destroy({where:{ id:data.id}}).then(res => {           
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao excluir a pessoa: ${err};`);
            reject(err);
        });
    });
}

module.exports = {buscarPessoas, insertPessoa, updatePessoa, deletePessoa};

