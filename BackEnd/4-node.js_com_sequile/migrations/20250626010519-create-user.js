'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('user_profile', {
    id : {
      type : Sequelize.INTEGER,
      primaryKey : true ,
      autoIncrement: true,
      allowNull: false
    },
    name : {
      type : Sequelize.STRING(100),
      allowNull: false
    },
    surname: {
      type : Sequelize.STRING(100),
      allowNull: false
    }, 
    email : {
      type : Sequelize.STRING(100),
      allowNull: false,
      unique : true, 
      validate : {
        isEmail : true
      }
    }, 
    phone : {
      type : Sequelize.STRING(20),
      allowNull: false, 
       validate: {
    is: /^[+]?[\d\s\-]{8,20}$/i  // exemplo simples para números, espaços, +, -
  }
    }, 
    password: {
      type : Sequelize.STRING(100),
      allowNull: false
    }, 
    createdAt : {
      type : Sequelize.DATE, 
      allowNull: false,
      defaultValue : Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type : Sequelize.DATE,
      allowNull: false, 
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
   })
  },

  async down (queryInterface) {
   await queryInterface.dropTable('user_profile')
  }
};
