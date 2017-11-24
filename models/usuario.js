var Sequelize = require('sequelize');

const sequelize = new Sequelize('utftime', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Usuario = sequelize.define('usuario', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    curso: {
        type: Sequelize.STRING
    }
},{
    timestamps: false,
    tableName: 'usuario',
    fields: ['email', 'nome', 'senha', 'curso']
});

//Aluno.findOne().then(aluno => {
//  console.log(aluno.get('id'));
//}).catch((err) => console.log('Algum error'));

