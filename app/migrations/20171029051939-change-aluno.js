'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Aluno ADD CONSTRAINT pessoaId_fk FOREIGN KEY (pessoaId) REFERENCES Pessoa(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Aluno DROP CONSTRAINT pessoaId_fk;")
  }
};
