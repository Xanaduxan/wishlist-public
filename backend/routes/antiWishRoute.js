const router = require('express').Router();
const { AntiWish } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const antiwishes = await AntiWish.findAll();
    res.json(antiwishes);
    console.log(antiwishes);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const newAntiWish = await AntiWish.create({
    userId: 2,
    title,
  });
  console.log(newAntiWish);

  res.json(newAntiWish);
});

module.exports = router;
