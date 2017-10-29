'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Analise ADD CONSTRAINT professorId_fk FOREIGN KEY (professorId) REFERENCES Professor(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Analise DROP CONSTRAINT professorId_fk;")
  }
};
