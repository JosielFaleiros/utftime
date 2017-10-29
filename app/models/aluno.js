'use strict';
module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define('Aluno', {
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
    tableName: 'Aluno',
    classMethods: {
      associate: function(models) {
        Aluno.belongsTo(Pessoa, { foreignKey : 'id'})
        Aluno.belongsTo(Curso, { foreignKey : 'id'})
      }
    }
  });
  return Aluno;
};