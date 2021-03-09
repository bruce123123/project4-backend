'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Seeds', [
      
      {
    name: 'Dent Corn',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://img1.etsystatic.com/058/0/10127508/il_fullxfull.726337499_eb4c.jpg",
      },
      {
    name: 'Yellow Corn',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://images1.americanlisted.com/nlarge/reids-yellow-dent-corn-open-pollinated-99-germination-assorted-sizes-americanlisted_34440111.jpg",
      },
      {
    name: 'Yellow Corn - Golden Bantam 8 Row',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://www.etsy.com/listing/221617144/golden-bantam-8-row-sweet-corn-heirloom?ref=shop_home_active_1", 
      }],
     
      {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seeds', null, {});
  
  }
};
