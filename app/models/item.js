'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      type: DataTypes.STRING(50)
    },
    grupoId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'Item',
    classMethods: {
      associate: function(models) {
        Item.belongsTo(Grupo, { foreignKey : 'idGrupo'})
      }
    }
  });
  return Item;
};