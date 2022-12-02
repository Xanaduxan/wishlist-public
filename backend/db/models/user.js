const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Friend, UserGroup, Wish, Order,
    }) {
      User.hasMany(Friend, { foreignKey: 'userId' });
      User.hasMany(UserGroup, { foreignKey: 'userId' });
      User.hasMany(Wish, { foreignKey: 'userId' });
      User.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    name: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.DATE,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
