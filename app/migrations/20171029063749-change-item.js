'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Item ADD CONSTRAINT grupoId_fk FOREIGN KEY (grupoId) REFERENCES Grupo(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Item DROP FOREIGN KEY grupoId_fk;")
  }
};
