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
      Friend.belongsToMany(User, { through: Connection, foreignKey: 'friendId', otherKey: 'userId', onDelete: 'CASCADE'});
      Friend.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Friend.hasMany(Connection, { foreignKey: 'friendId', onDelete: 'CASCADE' });
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
