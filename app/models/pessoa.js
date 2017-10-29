'use strict';
module.exports = (sequelize, DataTypes) => {
  let Pessoa = sequelize.define('Pessoa', {
    idPessoa: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nome: {
      allowNull: false,
      type: DataTypes.String(50)
    },
    email: {
      allowNull: false,
      type: DataTypes.String(50)
    },
    senha: {
      allowNull: false,
      type: DataTypes.String(50)
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pessoa;
};