const router = require('express').Router();
const fileUpload = require('express-fileupload');
const { User } = require('../db/models');

router.put('/', async (req, res) => {
  const { surname, name, gender } = req.body;
  try {
    if (req.session.user_id) {
      const user = await User.update({ surname, name, gender }, { where: { id: req.session.user_id } });
      if (user) {
        const updatedUser = await User.findOne({ where: { id: req.session.user_id }, raw: true });
        console.log(updatedUser);
        res.json(updatedUser);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/upload', async (req, res) => {
  console.log(23456789098765, req.body, req.files);
});

module.exports = router;
