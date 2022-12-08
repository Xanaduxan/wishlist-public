const router = require('express').Router();
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
    const newGroup = await Group.create({
      name, picture: picture || 'img/photo.jpg', description, adminId: id,
    });
res.json(newGroup);
  } catch (error) {
  console.log(error.message);
}
});

router.post('/:id', async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;
  const newGroup = await UserGroup.create({
    userId, groupId: id,
  });

  res.json(newGroup);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  console.log(userId, id);
  const x = await UserGroup.destroy({
    where: { userId, groupId: id },
  });


  res.json(userId);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allRequestsFromServer = await UserGroup.findAll({ raw: true });
  res.json(allRequestsFromServer);
});


router.delete('/', async (req, res) => {
  const id = req.session.user_id;
  const { groupId, adminId } = req.body;
  if (id === adminId) {
    await Group.destroy({
      where: { id: groupId, adminId },
    });
    res.json({ groupId, id });
  } else {
    await UserGroup.destroy({
      where: { userId: id, groupId },
    });

    res.json({ groupId, id });
  }
});


router.get('/gr', async (req, res) => {
  const allRequestsFromServer = await UserGroup.findAll({ raw: true });
  res.json(allRequestsFromServer);
});
module.exports = router;
