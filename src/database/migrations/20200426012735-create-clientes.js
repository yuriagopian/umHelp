'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
<<<<<<< HEAD:src/database/migrations/20200426012735-create-clientes.js
    
    return queryInterface.createTable('Clientes',
    { id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
=======

    return queryInterface.createTable('clientes',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
>>>>>>> a5b5d0ebb8c6801e5b9471b4d76b0999e7c698ec:src/database/migrations/20200424193636-create-clientes.js

        },
        nome: {
          type: Sequelize.STRING,
          allowNul: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNul: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNul: false
        }
      })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes');

  }
};
