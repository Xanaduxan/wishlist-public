const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const {
    nickName, email, password, repeatPassword,
  } = req.body;
  console.log(req.body);
  try {
    console.log(1, req.body);
    if (password && email && nickName && repeatPassword) {
      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        res.json({ status: 'error', message: 'такой емаил уже занят' });
      }
      if (password === repeatPassword) {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name: nickName, email, password: hashPassword });
        req.session.user_id = newUser.id;
        res.json({ message: 'success', user: newUser });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
