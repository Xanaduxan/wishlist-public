const router = require('express').Router();
const { Op } = require('sequelize');
const { Group, UserGroup } = require('../db/models');

router.get('/', async (req, res) => {
  // const id = req.session.user_id;
  try {
    const myGroups = await UserGroup.findAll({
      raw: true,
      where: { userId: 1 },
    });
    const groups = myGroups.map((gr) => gr.groupId);
    const groupArr = await Group.findAll({
      where: {
        id: {
          [Op.in]: groups,
        },
      },
      raw: true,
    });
    console.log(groupArr);
    // const data = await myFriends.map((friend) => Group.findAll({
    //   raw: true,
    //   where: { id: friend['Friend.userId'] },
    // }));
    // Promise.all(data)
    //   .then((result) => (res.json(result)));
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
