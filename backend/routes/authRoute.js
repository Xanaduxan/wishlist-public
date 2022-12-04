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
        return res.json({ status: 'error', message: 'такой емаил уже занят' });
      }
      if (password === repeatPassword) {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name: nickName, email, password: hashPassword });
        console.log(newUser, 'newUSer');
        req.session.user_id = newUser.id;
        res.json({ status: 'success', user: newUser });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const findUser = await User.findOne({ where: { email }, raw: true });
      if (!findUser) {
        return res.json({ status: 'user not found', message: 'Такого пользователя нет в системе' });
      }
      const passwordHash = await bcrypt.compare(password, findUser.password);
      if (!passwordHash) {
        return res.json({ status: 'error', message: 'Неверный логин или пароль' });
      }
      req.session.user_id = findUser.id;
      res.json({ status: 'success', user: findUser });
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/logout', (req, res) => {
  console.log(11111, 'logout');
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;
