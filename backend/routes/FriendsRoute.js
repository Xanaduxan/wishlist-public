const router = require('express').Router();
const { Friend, User, Connection } = require('../db/models');

router.get('/', async (req, res) => {
  const myFriends = await Connection.findAll({
    raw: true,
    where: { userId: 1 },
    include: [
      { model: Friend },
    ],
  });
  const data = await myFriends.map((friend) => User.findOne({
    raw: true,
    where: { id: friend['Friend.userId'] },
  }));
  Promise.all(data)
    .then((result) => (res.json(result)));
});

router.post('/find', async (req, res) => {
  const { login } = req.body;
  const findUser = await User.findOne({
    raw: true,
    where: { login },
  });
  console.log(findUser);
  res.json(findUser);
});

module.exports = router;
