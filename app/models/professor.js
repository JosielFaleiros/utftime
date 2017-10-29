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
      type: DataType.STRING(30)
    },
    pessoaId: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Professor.belongsTo(Pessoa, { foreignKey : 'id'})
      }
    }
  });
  return Professor;
};