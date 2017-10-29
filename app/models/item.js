'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    nome: {
      type: DataTypes.STRING(50)
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