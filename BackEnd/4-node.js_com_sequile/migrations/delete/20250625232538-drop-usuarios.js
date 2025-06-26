'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  },
  async down(queryInterface, Sequelize) {
    // opcional: recria a tabela se quiser voltar
  }
};
