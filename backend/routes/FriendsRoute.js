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

router.post('/find/:id', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.params;
    const newFriend = await Friend.create({ userId: id });
    const newRequest = await Connection.create({ userId: idUser, friendId: newFriend.id, status: false });
    res.json(newRequest);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/applications', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    // const applications = await Connection.findAll({
    //   raw: true,
    //   where: { userId: idUser },
    //   include: [
    //     { model: Friend },
    //   ],
    // });
    // const data = await applications.map((friend) => User.findOne({
    //   raw: true,
    //   where: { id: friend['Friend.userId'] },
    // }));
    // Promise.all(data)
    //   .then((result) => (res.json(result)));
    const applications = await Friend.findAll({
      raw: true,
      where: { userId: idUser },
      include: [
        { model: Connection },
      ],
    });
    const data = await applications.map((friend) => User.findOne({
      raw: true,
      where: { id: friend['Connections.userId'] },
    }));
    Promise.all(data)
      .then((result) => (res.json(result)));
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
