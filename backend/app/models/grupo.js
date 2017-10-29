/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo', {
    idgrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'grupo',
    timestamps: false
  })
}
