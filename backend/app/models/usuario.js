/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    idusuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hashconfconta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hashrecsenha: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codigouniversidade: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    curso_idcurso: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'curso',
        key: 'idcurso'
      }
    },
    papel_idpapel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '2',
      references: {
        model: 'papel',
        key: 'idpapel'
      }
    }
  }, {
    tableName: 'usuario',
    underscored: true
  })
}
