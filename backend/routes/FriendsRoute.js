/* eslint-disable max-len */
const router = require('express').Router();
const { Connection, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const firstFriend = await Connection.findAll({ raw: true, where: { userId: idUser, status: true } });
    const secondFriend = await Connection.findAll({ raw: true, where: { friendId: idUser, status: true } });
    const arrFriend = [...firstFriend, ...secondFriend];
    res.json(arrFriend);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/find', async (req, res) => {
  try {
    const allUsers = await User.findAll({ raw: true });
    res.json(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

router.get('/applications', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const requestsInFriend = await Connection.findAll({
      raw: true,
      where: { friendId: idUser, status: false },
    });
    res.json(requestsInFriend);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/applications', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.body;
    const newConnect = await Connection.create({ userId: idUser, friendId: id, status: false });
    res.json(newConnect);
  } catch (e) {
    console.log(e.message);
  }
});

router.put('/applications/:id', async (req, res) => {
  try {
    const idUser = req.session.user_id;
    const { id } = req.params;
    const user = await Connection.update({
      status: true,
    }, {
      where: { userId: id, friendId: idUser, status: false },
    });
    const newFriend = await Connection.findOne({
      raw: true,
      where: { userId: id, friendId: idUser, status: true },
    });
    res.json(newFriend);
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/applications/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idUser = req.session.user_id;
    const deleteRequest = await Connection.findOne({
      raw: true,
      where: { userId: id, friendId: idUser, status: false },
    });
    await Connection.destroy({
      where: { userId: id, friendId: idUser, status: false },
    });
    console.log(deleteRequest);
    res.json({id});
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idUser = req.session.user_id;
    const deleteRequest = await Connection.findOne({
      raw: true,
      where: { userId: id, friendId: idUser, status: true },
    });
    if (deleteRequest === null) {
      const deleteRequest2 = await Connection.findOne({
        raw: true,
        where: { userId: idUser, friendId: id, status: true },
      });
      await Connection.destroy({
        where: { userId: idUser, friendId: id, status: true },
      });
      res.json(id);
    }
    await Connection.destroy({
      where: { userId: id, friendId: idUser, status: true },
    });
    res.json(id);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
