'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Documento ADD CONSTRAINT alunoId_fk FOREIGN KEY (alunoId) REFERENCES Aluno(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Documento DROP CONSTRAINT alunoId_fk;")
  }
};
