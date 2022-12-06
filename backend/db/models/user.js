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
      Friend, UserGroup, Wish, Order, Connection, Group,
    }) {
      User.belongsToMany(Friend, { through: Connection, foreignKey: 'userId', otherKey: 'friendId' });
      User.belongsToMany(Group, { through: UserGroup, foreignKey: 'userId', otherKey: 'groupId' });
      User.hasMany(Wish, { foreignKey: 'userId' });
      User.hasMany(Order, { foreignKey: 'userId' });
      User.hasMany(Connection, { foreignKey: 'userId' });
      User.hasMany(Group, { foreignKey: 'adminId' });
    }
  }
  User.init({
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    name: DataTypes.TEXT,
    surname: DataTypes.TEXT,
    interests: DataTypes.TEXT,
    login: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.DATE,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
