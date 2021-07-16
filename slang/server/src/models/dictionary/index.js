const { Schema, model } = require('mongoose');
const dictionarySchema = new Schema({
  word: {
    type: String,
  },
  meaning: {
    type: String,
  },
});

module.exports = model('dictionary', dictionarySchema);
