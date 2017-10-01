'use strict';
module.exports = (sequelize, DataTypes) => {
    var Usuario = sequelize.define('Usuario', {
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
    }, {
    classMethods: {
        associate: function(models) {
        // associations can be defined here
        }
    }
    });
    return Usuario;
};