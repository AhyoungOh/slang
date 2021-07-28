const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema({
  word: {
    type: String,
  },
  meaning: {
    type: String,
  },
  // date: {
  //   created: { type: Date, default: Date.now },
  //   edited: { type: Data, default: Date.now },
  // },
  is_edited: { type: Boolean, default: false },
  userIds: {
    type: Array,
  },
});

module.exports = model('dictionary', dictionarySchema);
