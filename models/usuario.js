module.exports = function( sequelize, Sequelize ){
    const Usuario = sequelize.define('usuario', {
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        ra: {
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        cursoId: {
            type: Sequelize.INTEGER
        }
    },{
        tableName: 'usuario'
    });
    return Usuario;
}


