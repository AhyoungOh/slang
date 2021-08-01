// import dictionary from '../models/dictionary';
const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const authDictionary = require('./dictionary');
const authUpdate = require('./update');

router.use('/auth', authRouter);
router.use('/dictionary', authDictionary);
router.use('/update', authUpdate);

module.exports = router;
