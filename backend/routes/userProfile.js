const router = require('express').Router();
const { User } = require('../db/models');

router.put('/', async (req, res) => {
  const {
    surname, name, gender, image,
  } = req.body;
  try {
    if (req.session.user_id) {
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

router.get('/', async (req, res) => {
  if (req.session.user_id) {
    const findUser = await User.findOne({ where: { id: req.session.user_id }, raw: true });
    console.log(findUser);
    res.json({ user: findUser });
  }
});

module.exports = router;
