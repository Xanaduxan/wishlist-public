const router = require('express').Router();
const fileUpload = require('express-fileupload');
const { User, Wish, AntiWish } = require('../db/models');

router.put('/', async (req, res) => {
  const {
    surname, name, gender, image, currentUserId,
  } = req.body;
  try {
    if (req.session.user_id === Number(currentUserId)) {
      const user = await User.update({
        surname, name, gender, image,
      }, { where: { id: req.session.user_id } });
      if (user) {
        const updatedUser = await User.findOne({ where: { id: req.session.user_id }, raw: true });
        res.json({ user: updatedUser });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});

// router.post('/upload', async (req, res) => {
//   console.log(23456789098765, req.body, req.files);
// });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findOne({ where: { id }, raw: true });
    res.json({ user: findUser });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/wishes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const wishes = await Wish.findAll({
      raw: true,
      where: { userId: id },
    });
    res.json({ wishes });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/antiWishes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const antiWishes = await AntiWish.findAll({
      raw: true,
      where: { userId: id },
    });
    res.json({ antiWishes });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;