/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Papel', {
    idpapel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'papel',
    underscored: false,
    timestamps: false
  })
}
