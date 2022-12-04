/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      { id: 1, userId: 1, friendId: 1},
      { id: 2, userId: 1, friendId: 2 },
      { id: 3, userId: 1, friendId: 3 },
      { id: 5, userId: 1, friendId: 4 },
    ];
    const relation = data.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Connections', relation);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
