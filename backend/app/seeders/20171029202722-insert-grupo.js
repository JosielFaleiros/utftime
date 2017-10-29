'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('grupo', [
      { idgrupo: 1, nome: 'Grupo 1', descricao: 'Atividades de complementação da formação social, humana e cultural' },
      { idgrupo: 2, nome: 'Grupo 2', descricao: 'Atividades de cunho comunitário e de interesse coletivo' },
      { idgrupo: 3, nome: 'Grupo 3', descricao: 'Atividades de iniciação científica, tecnológica e de formação profissional' }
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
