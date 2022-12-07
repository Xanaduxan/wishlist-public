const router = require('express').Router();
const { Wish } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const wishes = await Wish.findAll(
      { order: [['createdAt', 'DESC']] },
    );
    res.json(wishes);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
