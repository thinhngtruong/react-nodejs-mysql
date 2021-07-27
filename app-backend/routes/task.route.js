const express = require('express');

const taskModel = require('../models/task.model');
const validate = require('../middlewares/validate.mdw');
const taskSchema = require('../schemas/task.json');

const router = express.Router();

router.get('/:userId', async function (req, res) {
  const userId = req.params.userId || 0;
  const list = await taskModel.findByUserId(userId);
  res.json(list);
})

router.post('/', validate(taskSchema), async function (req, res) {
  const task = {
    ...req.body,
    complete: 0
  };
  const listIds = await taskModel.add(task);
  task.id = listIds[0];
  res.status(201).json(task);
})

router.patch('/:id', async function (req, res) {
  const id = req.params.id || 0;
  const ret = await taskModel.patch(id, {
    complete: 1
  });

  return res.json(ret);
})

module.exports = router;