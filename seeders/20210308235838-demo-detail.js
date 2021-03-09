'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Details', [
       
      {
        botan_name: 'Zea mays',
        common_name: 'Nothstine Dent',
        light_requirement: 'Full Sun',
        planting_soil_temp: '60-65 deg',
        plant_depth: '1/4 - 1"',
        plant_spacing: '6 - 7"',
        plant_type: 'Edible Grain',
        fruit_size: 'Up to 7-8 Inch Yellow Ears, Yields 2 to 3 Ears Per Stalk',
        days_to_mature: '70 days',
        seeds_per_lb: '1,200'
      },
      {
        botan_name: 'Zea mays',
        common_name: 'Golden Beauty',
        light_requirement: 'Full Sun',
        planting_soil_temp: '60-65 deg',
        plant_depth: '1-2"',
        plant_spacing: '12 - 15"',
        plant_type: 'Edible Grain',
        fruit_size: 'Up to 7-Inch Yellow Ears, Yields 2 to 3 Ears Per Stalk',
        days_to_mature: '70 days',
        seeds_per_lb: '2,400'
      },
      {
        botan_name: 'Zea mays',
        common_name: 'Golden Bantam 8 Row',
        light_requirement: 'Full Sun',
        planting_soil_temp: '60-65 deg',
        plant_depth: '1-2"',
        plant_spacing: '12 - 15"',
        plant_type: 'Edible Grain',
        fruit_size: 'Up to 9-Inch Yellow Ears, Yields 2 to 3 Ears Per Stalk',
        days_to_mature: '70 days',
        seeds_per_lb: '2,400'
      }], 
     
    {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Details', null, {});
    
  }
};
