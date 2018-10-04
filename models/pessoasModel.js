const db    = require('../config/db');
const type  = db.Sequelize;

let contatosModel = db.define('pessoas',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

module.exports = contatosModel;
