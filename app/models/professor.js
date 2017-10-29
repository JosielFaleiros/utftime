'use strict';
module.exports = (sequelize, DataTypes) => {
  var Professor = sequelize.define('Professor', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    siap: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    pessoaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'Professor',
    classMethods: {
      associate: function(models) {
        Professor.belongsTo(Pessoa, { foreignKey : 'id'})
      }
    }
  });
  return Professor;
};