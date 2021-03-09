'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Catagory.init({
    seedId: DataTypes.INTEGER,
    detailId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Catagory',
  });
  return Catagory;
};