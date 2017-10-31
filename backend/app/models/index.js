'use strict'

var fs        = require('fs')
var path      = require('path')
var Sequelize = require('sequelize')
var basename  = path.basename(__filename)
var env       = process.env.NODE_ENV || 'development'
var config    = require(__dirname + '/../../config/config.js')[env]
var db        = {}

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})
.forEach(file => {
  var model = sequelize['import'](path.join(__dirname, file))
  db[model.name] = model
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.Departamento.hasMany(db.Curso, {as: 'cursos', foreignKey: 'departamento_iddepartamento'})
db.Curso.belongsTo(db.Departamento, {foreignKey: 'departamento_iddepartamento'})

db.Grupo.hasMany(db.Documento, {as: 'documentos', foreignKey: 'grupo_idgrupo'})
db.Documento.belongsTo(db.Grupo, {foreignKey: 'grupo_idgrupo'})

db.Usuario.hasMany(db.Documento, {as: 'documentos', foreignKey: 'usuario_idusuario'})
db.Documento.belongsTo(db.Usuario, {foreignKey: 'usuario_idusuario'})

db.Documento.belongsTo(db.Status)

db.Curso.hasMany(db.Usuario, {as: 'alunos', foreignKey: 'curso_idcurso'})
db.Usuario.belongsTo(db.Curso, {foreignKey: 'curso_idcurso'})

db.sequelize = sequelize
db.Sequelize = Sequelize
sequelize.sync({force: false})

module.exports = db
