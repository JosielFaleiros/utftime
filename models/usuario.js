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
        }
    },{
        tableName: 'usuario'
    });
    return Usuario;
}


