'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Documento ADD CONSTRAINT itemId_fk FOREIGN KEY (itemId) REFERENCES Item(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Documento DROP FOREIGN KEY itemId_fk;")
  }
};
