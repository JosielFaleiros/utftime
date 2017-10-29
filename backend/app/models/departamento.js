/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Departamento', {
    iddepartamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nomedepartamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'departamento',
    underscored: false,
    timestamps: false
  })
}
