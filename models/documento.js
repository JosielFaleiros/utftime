module.exports = function(sequelize, Sequelize){
    const Documento = sequelize.define('documento',{
        id_documento: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        url: {
            type: Sequelize.STRING
        },
        pontuacao: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        grupo: {
            type: Sequelize.STRING
        },
        situacao: {
            type: Sequelize.ENUM,
            values: ['aprovado', 'devolvido', 'pendente']
        }
    },{
        tableName: 'documento'
    });
    return Documento;
}