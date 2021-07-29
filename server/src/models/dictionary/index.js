const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema({
  word: {
    type: String,
  },
  meaning: {
    type: String,
  },
  // is_edited: { type: Boolean, default: false },
  userIds: {
    type: Array,
  },
});

module.exports = model('dictionary', dictionarySchema);
