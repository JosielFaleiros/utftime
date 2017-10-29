/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    idstatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'status',
    timestamps: false
  })
}
