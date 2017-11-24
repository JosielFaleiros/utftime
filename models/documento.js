var Sequelize = require('sequelize');

const Documento = sequelize.define('documento', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    }
},{
    timestamps: false,
    tableName: 'documento',
    fields: []
});