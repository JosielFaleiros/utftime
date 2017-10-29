'use strict';
module.exports = (sequelize, DataTypes) => {
  var Professor = sequelize.define('Professor', {
    idProfessor: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    siap: {
      allowNull: false,
      type: DataType.STRING(30)
    }
  }, {
    classMethods: {
      associate: function(models) {
        Professor.belongsTo(Pessoa, { foreignKey : 'idPessoa'})
      }
    }
  });
  return Professor;
};