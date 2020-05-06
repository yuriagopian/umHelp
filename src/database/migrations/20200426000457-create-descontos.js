'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.createTable('Descontos',{
      id:{
=======
    return queryInterface.createTable('descontos', {
      id: {
>>>>>>> a5b5d0ebb8c6801e5b9471b4d76b0999e7c698ec
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

      },
      tipoDesconto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      active: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "S"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNul: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNul: false
      }
    },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('descontos');
  }
};
