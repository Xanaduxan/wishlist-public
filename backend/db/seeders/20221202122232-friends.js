/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const friends = [
      {
        id: 1, userId: 2, name: 'two',
      },
      {
        id: 2, userId: 3, name: 'three',
      },
      {
        id: 3, userId: 4, name: 'fouth',
      },
      {
        id: 4, userId: 6, name: 'six',
      },
    ];
    const data = friends.map((friend) => ({
      ...friend,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Friends', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Friends');
  },
};
