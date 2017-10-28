/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('papel', {
    idpapel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'papel'
  })
}
