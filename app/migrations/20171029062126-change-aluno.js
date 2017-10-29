'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Aluno ADD CONSTRAINT cursoId_fk FOREIGN KEY (cursoId) REFERENCES Curso(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Aluno DROP CONSTRAINT cursoId_fk;")
  }
};
