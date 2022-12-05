const router = require('express').Router();
const { AntiWish } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const antiwishes = await AntiWish.findAll();
    res.json(antiwishes);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/', async (req, res) => {
  const { title, userId } = req.body;
  const newAntiWish = await AntiWish.create({
    userId,
    title,
  });
  console.log(newAntiWish);

  res.json(newAntiWish);
});

router.delete('/:antiwishId', async (req, res) => {
  const { antiwishId } = req.params;
  const { user } = res.locals;
  try {
    if (user) {
      const antiwish = await AntiWish.findOne({ where: { id: antiwishId } });

      if (user.id === antiwish.userId) {
        const data = await AntiWish.destroy({ where: { id: antiwishId } });
        if (data) {
          return res.status(202).json({ result: true });
        }
        return res.json({ result: false, message: 'Не удалось' });
      }
    }
  } catch (e) {
    res.json({ message: e.message });
  }
});

module.exports = router;
