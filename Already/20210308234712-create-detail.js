'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      botan_name: {
        type: Sequelize.STRING
      },
      common_name: {
        type: Sequelize.STRING
      },
      light_requirement: {
        type: Sequelize.STRING
      },
      planting_soil_temp: {
        type: Sequelize.STRING
      },
      plant_depth: {
        type: Sequelize.STRING
      },
      plant_spacing: {
        type: Sequelize.STRING
      },
      plant_type: {
        type: Sequelize.STRING
      },
      fruit_size: {
        type: Sequelize.STRING
      },
      days_to_mature: {
        type: Sequelize.STRING
      },
      seeds_per_lb: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Details');
  }
};