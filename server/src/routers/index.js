import dictionary from '../models/dictionary';
const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const authDictionary = require('./dictionary');

router.use('/auth', authRouter);
router.use('/dictionary', authDictionary);

module.exports = router;
