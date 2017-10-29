'use strict';
module.exports = (sequelize, DataTypes) => {
  var Documento = sequelize.define('Documento', {
    id: {
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
    },
    alunoId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    itemId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Documento.belongsTo(Aluno, { foreignKey : 'idAluno' })
        Documento.belongsTo(Item, { foreignKey : 'idItem'})
      }
    }
  });
  return Documento;
};