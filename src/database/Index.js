const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

<<<<<<< HEAD
const Price = require('../models/Price')
const Desconto = require('../models/Desconto')

const connection = new Sequelize(dbConfig);

Price.init(connection);
Desconto.init(connection);
=======
const Descontos = require('../models/Desconto')
const Pedidos = require('../models/Pedido')

const connection = new Sequelize(dbConfig);

Descontos.init(connection);
Pedidos.init(connection);
>>>>>>> a5b5d0ebb8c6801e5b9471b4d76b0999e7c698ec


connection.authenticate().then(function () {
    console.log('Conectou com sucesso!')
}).catch(function (erro) {
    console.log('falha ao se conectar: ' + erro)
});

module.exports = connection;
