'use strict';
module.exports = (sequelize, DataTypes) => {
  var Aluno = sequelize.define('Aluno', {
    idAluno: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Aluno;
};