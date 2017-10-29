'use strict';
module.exports = (sequelize, DataTypes) => {
  let Professor = sequelize.define('Professor', {
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
    tableName: 'Professor'
  });

  Professor.associate = function(models) {
    Professor.belongsTo(models.Pessoa, { foreignKey : 'id'})
  }
  
  return Professor;
};