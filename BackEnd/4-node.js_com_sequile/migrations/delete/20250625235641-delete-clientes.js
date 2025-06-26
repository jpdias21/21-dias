'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  },
  async down(queryInterface, Sequelize) {
    // Se quiser recriar depois, coloque aqui a lógica inversa
  }
};
