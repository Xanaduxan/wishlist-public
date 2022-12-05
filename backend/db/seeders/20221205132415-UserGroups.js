/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserGroups', [{
      userId: 1,
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      groupId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      groupId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
