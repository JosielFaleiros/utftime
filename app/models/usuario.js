'use strict';
module.exports = (sequelize, DataTypes) => {
    var Usuario = sequelize.define('Usuario', {
        idUsuario: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(150)
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        },
        papel: {
            allowNull: false,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        tableName: 'Usuario',
        classMethods: {
            associate: function(models) {
            // associations can be defined here
        }
    }
    });
    return Usuario;
};
