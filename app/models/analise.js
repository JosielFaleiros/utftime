'use strict';
module.exports = (sequelize, DataTypes) => {
  var Analise = sequelize.define('Analise', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    resultado: {
      type: DataTypes.STRING(40)
    },
    documentoId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    professorId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
  }, {
    classMethods: {
      associate: function(models) {
        Analise.belongsTo(Professor, { foreignKey : 'id'})
        Analise.belongsTo(Documento, { foreignKey : 'id'})
      }
    }
  });
  return Analise;
};