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
    static associate({ User, Connection }) {
      Friend.belongsToMany(User, { through: Connection, foreignKey: 'friendId', otherKey: 'userId' });
      Friend.belongsTo(User, { foreignKey: 'userId' });
      Friend.hasMany(Connection, { foreignKey: 'friendId' });
    }
  }
  Friend.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Friend',
    },
  );
  return Friend;
};
