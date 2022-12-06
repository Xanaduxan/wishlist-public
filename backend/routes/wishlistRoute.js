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
    // console.log(id);
    const {
      title, image, shop, description, holiday, category,
    } = req.body;
    // console.log(req.body);
    if (!title.length) {
      res.json({ error: 'заполните поле title' });
      return;
    }
    // console.log(title, image, shop, description, holiday, category);
    // const all = await Wish.findAll()

    const newWish = await Wish.create({
      title, image, shop, description, holiday, category, userId: 100, booking: false, wish: false,
    });
    // console.log(newWish);
    res.json(newWish);
  } catch (error) {
    console.log(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { id } = req.params;
    const {
      title, image, shop, description, holiday, category,
    } = req.body;
    if (!title.length) {
      res.json({ error: 'заполните поле title' });
      return;
    }
    const updateWish = await Wish.update(
      {
        title,
        image,
        shop,
        description,
        holiday,
        category,
        userId: 100,
        booking: false,
        wish: false,
      },
      { where: { id } },
    );
    const newUpdateWish = await Wish.findOne({ where: { id } });
// console.log(newUpdateWish);
    res.json(newUpdateWish);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Wish.destroy({ where: { id } });
    res.json({ status: 201, id });
  } catch (error) {
    console.log(error.message);
    res.json({ status: 400 });
  }
});

module.exports = router;
