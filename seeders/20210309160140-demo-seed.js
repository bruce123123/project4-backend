'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Seeds', [
      
      {
    name: 'Dent Corn',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://img1.etsystatic.com/058/0/10127508/il_fullxfull.726337499_eb4c.jpg",
    detailId: 1,
      },
      {
    name: 'Yellow Corn',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://images1.americanlisted.com/nlarge/reids-yellow-dent-corn-open-pollinated-99-germination-assorted-sizes-americanlisted_34440111.jpg",
    detailId: 2,
      },
      {
    name: 'Yellow Corn - Golden Bantam 8 Row',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://i.etsystatic.com/10162345/r/il/23d1be/723662501/il_794xN.723662501_iz63.jpg",
    detailId: 3,
      },
      {
    name: 'Stowells Evergreen',
    catagory: 'Vegetables',
    cat_type: 'Corn',
    img: "https://www.southernexposure.com/images/large/sweet-corn-stowells-evergreen_LRG.jpg",
    detailId: 5,
      }
    ],
     
      {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seeds', null, {});
  
  }
};
