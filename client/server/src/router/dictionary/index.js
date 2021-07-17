const express = require('express');
const router = express.Router();
const { addDictionary } = require('./src/services/dictionary');

router.post('/api/dictionary', async (req, res) => {
  await addDictionary({
    word: req.body.word,
    meaning: req.body.meaning,
  });
  res.send('입력 완료');
});

module.exports = router;
