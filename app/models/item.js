'use strict';
module.exports = (sequelize, DataTypes) => {
  let Item = sequelize.define('Item', {
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
    tableName: 'Item'
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Grupo, { foreignKey : 'id'})
  }

  return Item;
};