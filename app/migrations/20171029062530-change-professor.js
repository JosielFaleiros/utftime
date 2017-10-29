'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Professor ADD CONSTRAINT pessoaId2_fk FOREIGN KEY (pessoaId) REFERENCES Pessoa(id);")
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query("ALTER TABLE Professor DROP CONSTRAINT pessoaId2_fk;")
  }
};
