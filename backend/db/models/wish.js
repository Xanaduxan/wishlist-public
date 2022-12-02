const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, User }) {
      Wish.belongsTo(User, { foreignKey: 'userId' });
      Wish.hasOne(Order, { foreignKey: 'wishId' });
    }
  }
  Wish.init({
    booking: DataTypes.BOOLEAN,
    wish: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    shop: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    holiday: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Wish',
  });
  return Wish;
};
