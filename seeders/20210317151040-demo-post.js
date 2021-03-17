'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Posts', [
       {
          name: 'Field Corn',
          img: 'https://michigangrown.org/wp-content/uploads/2018/03/fieldcorn-1000x675.jpg',
          catagory: 'Vegetables',
          cat_type: 'Corn',
          detailId: 4,
          botan_name: 'Zea mays',
          common_name: 'Field Corn',
          light_requirement: 'Full Sun',
          planting_soil_temp: '60 - 65 deg',
          plant_depth: '1 inch',
          plant_spacing: '12 inches',
          plant_type: 'Edible Grain',
          fruit_size: '9 inches',
          days_to_mature: '85 - 90 days',
          seeds_per_lb: '2,400 seeds per Lb'
    }],
 
{});
    
},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
    
  }
  };
