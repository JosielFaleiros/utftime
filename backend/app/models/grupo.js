/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grupo', {
    idgrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'grupo',
    underscored: false,
    timestamps: false
  })
}
