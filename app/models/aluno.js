'use strict';
module.exports = (sequelize, DataTypes) => {
  let Aluno = sequelize.define('Aluno', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    pessoaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    cursoId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'Aluno'
  });

  Aluno.associate = function(models) {
    Aluno.belongsTo(models.Pessoa, { foreignKey : 'id'})
    Aluno.belongsTo(models.Curso, { foreignKey : 'id'})
  }  
  
  return Aluno;
};