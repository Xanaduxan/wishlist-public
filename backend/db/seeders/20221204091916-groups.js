/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Groups', [{
      name: '🔥 💣 💥 Elbrus New Year 💥💣🔥  ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Кама Пуля',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'ДР Ани',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
