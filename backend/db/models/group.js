const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserGroup }) {
      Group.belongsToMany(User, { through: UserGroup, foreignKey: 'groupId', otherKey: 'userId' });
      Group.belongsTo(User, { foreignKey: 'adminId' });
    }
  }
  Group.init({
    name: DataTypes.TEXT,
    adminId: DataTypes.INTEGER,
    picture: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
