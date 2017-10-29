'use strict';
module.exports = (sequelize, DataTypes) => {
  let Grupo = sequelize.define('Grupo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'Grupo',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Grupo;
};