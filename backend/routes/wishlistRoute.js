const router = require('express').Router();
const { Wish } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const wishes = await Wish.findAll({
      raw: true,
      where: { userId: 1 },
    });
    res.json(wishes);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const id = req.session.user_id;
    const {
      title, image, shop, description, holiday, category,
    } = req.body;
    if (!title.length) {
      res.json({ error: 'заполните поле title' });
      return;
    }
    const newWish = await Wish.create({
      title, image, shop, description, holiday, category, userId: id, booking: false, wish: false,
    });
    res.json(newWish);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
