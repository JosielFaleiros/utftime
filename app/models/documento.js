'use strict';
module.exports = (sequelize, DataTypes) => {
  var Documento = sequelize.define('Documento', {
    idDocumento: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    dataEnvio: {
      type: DataTypes.DATEONLY
    },
    pontuacao: {
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING(50)
    }
  }, {
    classMethods: {
      associate: function(models) {
        Documento.belongsTo(Aluno, { foreignKey : 'idAluno' })
        Documento.belongsTo(Item, { foreignKey : 'idItem'})
        Documento.hasOne(Analise, { foreignKey : 'idDocumento'})
      }
    }
  });
  return Documento;
};