const router = require('express').Router();
const { Op } = require('sequelize');
const { Group, UserGroup } = require('../db/models');

router.get('/', async (req, res) => {
  const id = req.session.user_id;
  try {
    const groupArr = await Group.findAll({
      raw: true,
    });
    res.json(groupArr);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const id = req.session.user_id;
    const {
      name, picture, description,
    } = req.body;
    if (!name.length) {
      res.json({ error: 'заполните поле title' });
      return;
    }
    const newGroup = Group.create({
      name, picture, description, adminId: id,
    });
    res.json(newGroup);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/:id', async (req, res) => {
  const { idUser } = req.body;
  const newGroup = await UserGroup.create({
    userId: idUser, groupId: 1,
  });
  res.json(newGroup);
});

module.exports = router;
