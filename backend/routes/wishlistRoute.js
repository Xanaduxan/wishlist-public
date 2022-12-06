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

module.exports = router;
