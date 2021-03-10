'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seed.belongsTo(models.Detail, { foreignKey: "detailId" });
    }
  };
  Seed.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    catagory: DataTypes.STRING,
    cat_type: DataTypes.STRING,
    detailId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seed',
  });
  return Seed;
};