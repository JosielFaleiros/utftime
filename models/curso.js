module.exports = function(sequelize, Sequelize){

    const Curso = sequelize.define('curso', {
        cursoId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome_curso:{
            type: Sequelize.STRING
        }
    },{
        tableName: 'curso'
    });
    return Curso;
}