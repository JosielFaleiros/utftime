'use strict';
module.exports = (sequelize, DataTypes) => {
  let Curso = sequelize.define('Curso', {
    idCurso: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING(30)
    }
  }, {
    classMethods: {
      associate: function(models) {
        Curso.hasOne(Aluno, {foreignKey : 'idAluno'})
      }
    }
  });
  return Curso;
};