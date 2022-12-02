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
    static associate({ UserGroup }) {
      Group.hasMany(UserGroup, { foreignKey: 'groupId' });
    }
  }
  Group.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
