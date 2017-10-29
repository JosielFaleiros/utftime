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
  }, {
    classMethods: {
      associate: function(models) {
        Pessoa.hasOne(Aluno, { foreignKey : 'idAluno' })
        Pessoa.hasOne(Professor, { foreignKey : 'idProfessor' })
      }
    }
  });
  return Pessoa;
};