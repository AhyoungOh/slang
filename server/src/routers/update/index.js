const express = require('express');
const mongoose = require('mongoose');

const Dictionary = require('../../models/dictionary');

const { validUser } = require('../../middleware/user');
const router = express.Router();

// WRITE
router.post('/', validUser, (req, res) => {
  console.log('req body input word: ', req.body.inputWord);
  console.log('req body: ', req.body);
  if (!req.user) {
    return res.status(403).json({
      error: 'Not Logged In',
      code: 1,
    });
  }

  if (typeof req.body.inputWord !== 'string') {
    return res.status(400).json({
      error: 'inputWord is not string',
      code: 2,
    });
  }

  if (req.body.inputWord === '') {
    return res.status(400).json({
      error: 'Empty inputWord',
      code: 3,
    });
  }
  if (typeof req.body.inputMeaning !== 'string') {
    return res.status(400).json({
      error: 'inputMeaning is not string',
      code: 2,
    });
  }

  if (req.body.inputMeaning === '') {
    return res.status(400).json({
      error: 'Empty inputMeaning',
      code: 3,
    });
  }

  let update = new Dictionary({
    writer: req.user.username,
    word: req.body.inputWord,
    meaning: req.body.inputMeaning,
  });

  update.save((err) => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

// MODIFY
router.put('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'Invalid ID',
      code: 1,
    });
  }

  if (typeof req.body.contents !== 'string') {
    return res.status(400).json({
      error: 'CONTENTS IS NOT STRING',
      code: 2,
    });
  }

  if (req.body.contents === '') {
    return res.status(400).json({
      error: 'EMPTY CONTENTS',
      code: 3,
    });
  }

  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 4,
    });
  }

  Update.findById(req.params.id, (err, update) => {
    if (err) throw err;
    if (!update) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 5,
      });
    }
    if (update.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 6,
      });
    }

    update.contents = req.body.contents;
    update.date.edited = new Date();
    update.is_edited = true;

    update.save((err, update) => {
      if (err) throw err;
      return res.json({
        success: true,
        update,
      });
    });
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 1,
    });
  }

  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 2,
    });
  }

  Update.findById(req.params.id, (err, update) => {
    if (err) throw err;
    if (!update) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 3,
      });
    }
    if (update.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 4,
      });
    }

    Update.remove({ _id: req.params.id }, (err) => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
});

// GET LIST
router.get('/', (req, res) => {
  Update.find()
    .sort({ _id: -1 })
    .limit(6)
    .exec((err, update) => {
      if (err) throw err;
      res.json(findOneAndUpdate);
    });
});

router.put('/user', validUser, async (req, res) => {
  const { slangId } = req.body;
  const userId = req.user._id;
  try {
    const slang = await Update.findOne({ _id: slangId });
    const correctUserIds = slang.correctUserIds;
    await Update.updateOne(
      { _id: slangId },
      { correctUserIds: [...correctUserIds, userId] }
    );
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
