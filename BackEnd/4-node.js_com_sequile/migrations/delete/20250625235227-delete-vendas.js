'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas');
  },
  async down(queryInterface, Sequelize) {
    // opcional: recria a tabela se quiser voltar
  }
};
