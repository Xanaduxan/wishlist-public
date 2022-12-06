/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        id: 1, userId: 1, friendId: 1, status: true,
      },
      {
        id: 2, userId: 1, friendId: 2, status: true,
      },
      {
        id: 3, userId: 1, friendId: 3, status: true,
      },
      {
        id: 5, userId: 1, friendId: 4, status: true,
      },
    ];
    const relation = data.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Connections', relation);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
