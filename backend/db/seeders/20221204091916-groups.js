/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Groups', [{
      name: '🔥 💣 💥 Elbrus New Year 💥💣🔥  ',
      adminId: 1,
      picture: 'https://kartinkin.net/uploads/posts/2022-03/1647051059_1-kartinkin-net-p-kartinki-dlya-gruppi-druzei-1.jpg',
      description: 'Ну сейчас посмотрим, что к чему',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Кама Пуля',
      adminId: 2,
      picture: 'https://kartinkin.net/uploads/posts/2022-03/1647051135_4-kartinkin-net-p-kartinki-dlya-gruppi-druzei-4.jpg',
      description: 'Шааааа',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'ДР Ани',
      adminId: 3,
      picture: 'https://kartinkin.net/uploads/posts/2022-03/thumbs/1647051076_7-kartinkin-net-p-kartinki-dlya-gruppi-druzei-8.jpg',
      description: 'Хэппи бёздэй',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
