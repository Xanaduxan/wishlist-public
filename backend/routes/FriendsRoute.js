const router = require('express').Router();
const { Friend, User, Connection } = require('../db/models');

router.get('/', async (req, res) => {
  try {
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
  } catch (e) {
    console.log(e.message);
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const { login } = req.body;
//     const myFriends = await Connection.findAll({
//       raw: true,
//       where: { userId: 1 },
//       include: [
//         { model: Friend },
//       ],
//     });
//     const friend = await myFriends.find((friendItem) => friendItem['Friend.name'] === login);
//     const data = await User.findAll({
//       raw: true,
//       where: { login: friend['Friend.name'] },
//     });
//     res.json(data);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

router.get('/find', async (req, res) => {
  try {
    // const { login } = req.body;
    // const user = await User.findOne({
    //   raw: true,
    //   where: { id: 1 },
    // });
    // if (login !== user.login) {
    //   const findUser = await User.findOne({
    //     raw: true,
    //     where: { login },
    //   });
    //   res.json(findUser);
    // }
    const allUser = await User.findAll({
      raw: true,
    });
    res.json(allUser);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/find/:id', async (req, res) => {
  try {
  const userId = req.session.user_id;
  const { friendId } = req.params;
  const newRequest = await Connection.create({ userId, friendId, status: false });
  console.log(newRequest);
  res.json(newRequest);
  } catch(e) {
    console.log(e.message);
  }
});

module.exports = router;
