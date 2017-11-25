var Sequelize = require('sequelize');

var sequelize = new Sequelize('utftime', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.usuario = require('./usuario.js')(sequelize, Sequelize);  
db.documento = require('./documento.js')(sequelize, Sequelize);  
db.curso = require('./curso.js')(sequelize, Sequelize);  

db.usuario.belongsTo(db.curso, { foreignKey: 'id_curso' });
db.documento.belongsTo(db.usuario, { foreignKey: 'dono' });

(async function(){
  await db.curso.sync();
  await db.usuario.sync();
  await db.documento.sync();
  await sequelize.close();
})();
