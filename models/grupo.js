var Sequelize = require('sequelize');

const Grupo = sequelize.define('grupo', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    }
},{
    timestamps: false,
    tableName: 'grupo',
    fields: []
});