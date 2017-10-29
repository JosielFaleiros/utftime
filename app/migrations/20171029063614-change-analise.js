'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Analise ADD CONSTRAINT documentoId_fk FOREIGN KEY (documentoId) REFERENCES Documento(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Analise DROP CONSTRAINT documentoId_fk;")
  }
};
