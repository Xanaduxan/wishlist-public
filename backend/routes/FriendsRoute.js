/* eslint-disable max-len */
const router = require('express').Router();
const { Friend, User, Connection } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const myFriends = await Friend.findAll({
      raw: true,
      where: { userId: idUser },
      include: [
        { model: Connection, where: { status: true } },
      ],
    });
    const data = await myFriends.map((friend) => User.findOne({
      raw: true,
      where: { id: friend['Connections.userId'] },
    }));
    Promise.all(data)
      .then((result) => (res.json(result)));
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/find', async (req, res) => {
  try {
    const AllUsers = await User.findAll({
      raw: true,
    });
    res.json(AllUsers);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/find', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.body;
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
    const applications = await Friend.findAll({
      raw: true,
      where: { userId: idUser },
      include: [
        { model: Connection, where: { status: false } },
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

router.delete('/:id', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    // const { id } = req.params;
    // console.log('111111111111111111111');
    // const friend = await Friend.findOne({
    //   where: { userId: id },
    // });
    // const deleteFriend = await Connection.destroy({
    //   where: { userId: idUser, friendId: friend.userId, status: true },
    // });
    // console.log(deleteFriend);
    // res.json(deleteFriend);

    const deleteFriend = await Connection.destroy({
      raw: true,
      where: { userId: idUser, status: true },
      include: [
        { model: Friend },
      ],
    });
    if (!deleteFriend) {
      const deleteFriend2 = await Friend.destroy({
        raw: true,
        where: { userId: idUser },
        include: [
          { model: Connection },
        ],
      });
      if (deleteFriend2) {
        res.json({ message: 'done' });
      } else {
        res.json({ message: 'done' });
      }
    }
  } catch (e) {
    console.log(e.message);
  }
});

router.put('/applications/:id', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.params;
    const user = await Connection.findOne({
      where: { userId: id },
      include: [
        { model: Friend, where: { userId: idUser } },
      ],
    });
    user.status = true;
    user.save();
    res.json({ message: 'done' });
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('applications/:id', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.params;
    const deleteReq = await Connection.destroy({
      where: { userId: id, friendId: idUser, status: false },
    });
    res.json(deleteReq);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/addreq', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const friends = await Connection.findAll({
      raw: true,
      where: { userId: idUser },
      include: [
        { model: Friend },
      ],
    });
    const data = await friends.map((friend) => User.findOne({
      raw: true,
      where: { id: friend['Friend.userId'] },
    }));
    Promise.all(data)
      .then((result) => (res.json(result)));
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
