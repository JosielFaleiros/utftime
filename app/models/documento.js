'use strict';
module.exports = (sequelize, DataTypes) => {
  let Documento = sequelize.define('Documento', {
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
      type: DataTypes.INTEGER
    },
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'Documento'
  });

  Documento.associate = function(models) {
    Documento.belongsTo(models.Aluno, { foreignKey : 'id' })
    Documento.belongsTo(models.Item, { foreignKey : 'id'})
  }

  return Documento;
};