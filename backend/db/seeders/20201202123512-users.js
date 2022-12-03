/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const users = [
      {
        id: 1,
        password: '12345678',
        email: 'qw@wq',
        name: 'one',
        gender: 'man',
        image: 'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/5/46/756038770746465.jpg',
      },
      {
        id: 2,
        password: '12345678',
        email: 'qw@wq5',
        name: 'two',
        gender: 'man',

        image: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg',
      },
      {
        id: 3,
        password: '12345678',
        email: 'qw@wq1',
        name: 'three',
        gender: 'women',

        image: 'https://klike.net/uploads/posts/2020-01/1578212659_1.jpeg',
      },
      {
        id: 4,
        password: '12345678',
        email: 'qw@wq2',
        name: 'fouth',
        gender: 'man',

        image: 'https://mixnews.lv/wp-content/uploads/2020/09/18/2020-09-18-mixnews-1594109847_krasota-prirody-na-fotografiyax-19.jpg',
      },
      {
        id: 5,
        password: '12345678',
        email: 'qw@wq3',
        name: 'five',
        gender: 'women',

        image: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
      },
      {
        id: 6,
        password: '12345678',
        email: 'qw@wq4',
        name: 'six',
        gender: 'man',

        image: 'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg',
      },
    ];
    const data = users.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
