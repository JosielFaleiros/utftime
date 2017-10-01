'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuario', {
            idUsuario: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            login: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            senha: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
            },
            salt: {
                allowNull: false,
                type: Sequelize.STRING
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },
            papel: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuario');
  }
};