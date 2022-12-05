/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const wishes = [
      {
        id: 1,
        booking: false,
        wish: false,
        userId: 1,
        title: 'массаж',
        holiday: '23 февраля',
        image: 'https://www.shkolazhizni.ru/img/content/i112/112418_or.jpg',
        shop: 'dns',
        description: 'лучший массаж в мире',
        category: 'для себя',
      },
      {
        id: 2,
        booking: false,
        wish: false,
        userId: 1,
        title: 'девочки',
        holiday: 'День рождения',
        image: 'https://gorabbit.ru/wp-content/uploads/2019/10/%D0%B2-%D1%87%D0%B5%D0%BC-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B2%D0%B8%D0%BD%D0%B8%D1%82%D1%8C-%D0%94%D0%B8%D0%B0%D0%BD%D1%83-%D0%A8%D1%83%D1%80%D1%8B%D0%B3%D0%B8%D0%BD%D1%83-7.jpg',
        shop: 'трасса',
        description: 'на разок пойдет',
        category: 'для себя',
      },
      {
        id: 3,
        booking: false,
        wish: false,
        userId: 1,
        title: 'тетрис',
        holiday: '23 февраля',
        image: 'https://garage812.com/wa-data/public/shop/products/49/02/249/images/466/466.440@2x.jpg',
        shop: 'рынок',
        description: '',
        category: 'малому',
      },
      {
        id: 4,
        booking: false,
        wish: false,
        userId: 1,
        title: 'кубик рубик',
        holiday: '23 февраля',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
        shop: 'рынок',
        description: '',
        category: 'малому',
      },
      {
        id: 5,
        booking: false,
        wish: false,
        userId: 1,
        title: 'Ааааавтомобиль',
        holiday: 'любой день',
        image: 'https://cdn.motor1.com/images/mgl/Jepjg/s1/chevrolet-camaro.jpg',
        shop: 'Автодилер',
        description: 'Бамблби',
        category: 'для себя',
      },
      {
        id: 6,
        booking: false,
        wish: false,
        userId: 1,
        title: 'Водяной пистолет',
        holiday: 'День рождения',
        image: 'https://hi-news.ru/wp-content/uploads/2018/07/screen-shot-2018-07-20-at-10-52-22-am-750x380.png',
        shop: 'Алиэкспрес',
        description: 'Если будет хорошо себя вести, иначе обойдется шнурками',
        category: 'малому',
      },
    ];
    const data = wishes.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Wishes', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Wishes');
  },
};
