const express = require('express');
const router = express.Router();
const dictionaryRouter = require('./dictionary');

router.use('/dictionary', dictionaryRouter);

module.exports = router;
