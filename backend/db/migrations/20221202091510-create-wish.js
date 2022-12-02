/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      booking: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      wish: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      shop: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.TEXT,
      },
      holiday: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wishes');
  },
};
