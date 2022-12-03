const router = require('express').Router();
const { Friend, User, Connection } = require('../db/models');

router.get('/', async (req, res) => {
  const myFriends = await Connection.findAll({
    raw: true,
    where: { userId: 1 },
    include: [
      { model: Friend },
      { model: User },
    ],
  });
  res.json(myFriends);
});

module.exports = router;
