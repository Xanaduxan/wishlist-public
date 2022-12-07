const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AntiWish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      AntiWish.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE'});
    }
  }
  AntiWish.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'AntiWish',
  });
  return AntiWish;
};
