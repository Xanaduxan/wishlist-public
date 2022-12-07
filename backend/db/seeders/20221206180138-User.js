/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [{
      login: '123456',
      email: 'example@mail.ru',
      password: '123456',
      image: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
    },
    {
      login: '654321',
      email: 'example@ya.ru',
      password: '123456',
      image: 'https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg',
    },
    ];
    const users = data.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
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
