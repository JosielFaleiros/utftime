'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pessoa', {
      idPessoa: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoa');
  }
};