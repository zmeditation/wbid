'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeOfConfig: {
        type: Sequelize.STRING
      },
      sizes: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.JSON
      },
      inventory: {
        type: Sequelize.JSON
      },
      config: {
        type: Sequelize.JSON
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Configs');
  }
};
