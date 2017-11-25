var Sequelize = require('sequelize');

var conexao = require('./../models/conexao.js');

var db = {};

db.conexao = conexao;
db.Sequelize = Sequelize;

db.usuario = require('./usuario.js')(conexao, Sequelize);  
db.documento = require('./documento.js')(conexao, Sequelize);  
db.curso = require('./curso.js')(conexao, Sequelize);  

db.usuario.belongsTo(db.curso, { foreignKey: 'id_curso' });
db.documento.belongsTo(db.usuario, { foreignKey: 'dono' });

(async function(){
  await db.curso.sync();
  await db.usuario.sync();
  await db.documento.sync();
  await conexao.close();
})();
