/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documento', {
    iddocumento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    dataenvio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nomearquivo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    grupo_idgrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupo',
        key: 'idgrupo'
      }
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    status_idstatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'status',
        key: 'idstatus'
      }
    },
    pontuacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'documento'
  })
}
