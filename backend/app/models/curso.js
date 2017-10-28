/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso', {
    idcurso: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nomecurso: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    departamento_iddepartamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    }
  }, {
    tableName: 'curso'
  })
}
