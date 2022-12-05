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

module.exports = router;
