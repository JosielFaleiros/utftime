'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('curso', [
      { idcurso: 1, nomecurso: 'Engenharia de Computação', departamento_iddepartamento: 1 },
      { idcurso: 2, nomecurso: 'Engenharia de Software', departamento_iddepartamento: 1 },
      { idcurso: 3, nomecurso: 'Análise e Desenvolvimento de Sistemas', departamento_iddepartamento: 1 }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('Person', null, {})
    */
  }
}
