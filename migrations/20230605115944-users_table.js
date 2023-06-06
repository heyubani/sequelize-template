'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: `user-${uuidv4().replace(/-/g, '').toLowerCase()}`,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      middle_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
