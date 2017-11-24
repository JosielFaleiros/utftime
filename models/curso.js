var Sequelize = require('sequelize');

const Curso = sequelize.define('curso', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    }
},{
    timestamps: false,
    tableName: 'curso',
    fields: []
});