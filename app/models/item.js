'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      type: DataTypes.STRING(50)
    },
    grupoId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(Grupo, { foreignKey : 'idGrupo'})
      }
    }
  });
  return Item;
};