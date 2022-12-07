const router = require('express').Router();
const fileUpload = require('express-fileupload');
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
        console.log(updatedUser);
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
    console.log(findUser);
    res.json({ user: findUser });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
