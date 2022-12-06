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

    res.json(groupArr);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
