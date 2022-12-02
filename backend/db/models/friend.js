const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Friend.belongsToMany(User, { foreignKey: 'userId' });
    }
  }
  Friend.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    friendId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    isFriend: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};
