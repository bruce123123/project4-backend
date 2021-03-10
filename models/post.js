'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    catagory: DataTypes.STRING,
    cat_type: DataTypes.STRING,
    detailId: DataTypes.INTEGER,
    botan_name: DataTypes.STRING,
    common_name: DataTypes.STRING,
    light_requirement: DataTypes.STRING,
    planting_soil_temp: DataTypes.STRING,
    plant_depth: DataTypes.STRING,
    plant_spacing: DataTypes.STRING,
    plant_type: DataTypes.STRING,
    fruit_size: DataTypes.STRING,
    days_to_mature: DataTypes.STRING,
    seeds_per_lb: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};