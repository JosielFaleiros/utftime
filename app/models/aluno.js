'use strict';
module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define('Aluno', {
    idAluno: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Aluno.belongsTo(Pessoa, { foreignKey : 'idPessoa'})
        Aluno.belongsTo(Curso, { foreignKey : 'idCurso'})
      }
    }
  });
  return Aluno;
};