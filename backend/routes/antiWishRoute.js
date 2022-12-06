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
  // console.log(newAntiWish);

  res.json(newAntiWish);
});

router.delete('/:antiwishId', async (req, res) => {
  const { antiwishId } = req.params;

  const userId = req.session.user_id;

  try {
    if (userId) {
      const antiwish = await AntiWish.findOne({ where: { id: antiwishId } });

      if (userId === Number(antiwish.userId)) {
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

router.put('/:antiwishId', async (req, res) => {
  try {
    const user = req.session.user_id;

    const { antiwishId } = req.params;
    const { title } = req.body;
    const antiwish = await AntiWish.findOne({
      where: {
        id: antiwishId,
      },
    });

    if (user === antiwish.userId) {
      await AntiWish.update({ title }, { where: { id: antiwishId } });
      const antiwishNew = await AntiWish.findOne({
        where: {
          id: antiwishId,
        },
      });
      res.json(antiwishNew);
    }
  } catch (e) {
    console.error(e);
    res.json({ result: false, message: e.message });
  }
});

module.exports = router;
