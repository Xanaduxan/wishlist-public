const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Wish, User }) {
      Order.belongsTo(Wish, { foreignKey: 'wishId', onDelete: 'CASCADE'});
      Order.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }
  Order.init({
    wishId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Wishes',
        key: 'id',
      },
    },
    buy: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
