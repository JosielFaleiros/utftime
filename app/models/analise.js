'use strict';
module.exports = (sequelize, DataTypes) => {
  var Analise = sequelize.define('Analise', {
    idAnalise: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    resultado: {
      type: DataTypes.STRING(40)
    }
  }, {
    classMethods: {
      associate: function(models) {
        Analise.belongsTo(Professor, { foreignKey : 'idProfessor'})
        Analise.belongsTo(Documento, { foreignKey : 'idDocumento'})
      }
    }
  });
  return Analise;
};