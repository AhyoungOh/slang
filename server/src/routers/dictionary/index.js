import express from 'express';
import mongoose from 'mongoose';

const Dictionary = require('../../models/dictionary');

const router = express.Router();

// WRITE
router.post('/', (req, res) => {
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'Not Logged In',
      code: 1,
    });
  }

  if (typeof req.body.contents !== 'string') {
    return res.status(400).json({
      error: 'contents is not string',
      code: 2,
    });
  }

  if (req.body.contents === '') {
    return res.status(400).json({
      error: 'Empty contents',
      code: 3,
    });
  }

  let dictionary = new Dictionary({
    writer: req.session.loginInfo.username,
    contetns: req.body.contents,
  });

  dictionary.save((err) => {
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

  Dictionary.findById(req.params.id, (err, dictionary) => {
    if (err) throw err;
    if (!dictionary) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 5,
      });
    }
    if (dictionary.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 6,
      });
    }

    dictionary.contents = req.body.contents;
    dictionary.date.edited = new Date();
    dictionary.is_edited = true;

    dictionary.save((err, dictionary) => {
      if (err) throw err;
      return res.json({
        success: true,
        dictionary,
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

  Dictionary.findById(req.params.id, (err, dictionary) => {
    if (err) throw err;
    if (!dictionary) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 3,
      });
    }
    if (dictionary.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 4,
      });
    }

    Dictionary.remove({ _id: req.params.id }, (err) => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
});

// GET LIST
router.get('/', (req, res) => {
  Dictionary.find()
    .sort({ _id: -1 })
    .limit(6)
    .exec((err, dictionary) => {
      if (err) throw err;
      res.json(dictionary);
    });
});

export default router;
