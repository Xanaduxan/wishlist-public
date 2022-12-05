const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const {
    login, email, password, repeatPassword,
  } = req.body;
  try {
    if (password && email && login && repeatPassword) {
      const findUser = await User.findOne({ where: { email } });
      const findUserByLogin = await User.findOne({ where: { login } });
      if (findUser) {
        return res.json({ status: 'error', message: 'такой емаил уже занят' });
      }
      if (findUserByLogin) {
        return res.json({ status: 'error login', message: 'такой логин уже занят' });
      }
      if (password === repeatPassword) {
        console.log(1);
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ login, email, password: hashPassword });
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
  req.session.destroy(() => res.clearCookie('user_uid').json({ message: 'Session destroy' }));
});

router.get('/init', async (req, res) => {
  // console.log(req.session.user_id);
  const findUser = await User.findOne({ where: { id: req.session.user_id }, raw: true });
  console.log(11111111212121, findUser);
  res.json({ user: findUser });
});

module.exports = router;
