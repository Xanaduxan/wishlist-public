const router = require('express').Router();
const { Groups } = require('../db/models');

router.get('/', async (req, res) => {
  const myGroups = await Groups.findAll({
    raw: true,
    where: { id: 1 },
  });
});

module.exports = router;
