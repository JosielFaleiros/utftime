'use strict';
module.exports = (sequelize, DataTypes) => {
  let Curso = sequelize.define('Curso', {
    id: {
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
    tableName: 'Curso',
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Curso;
};