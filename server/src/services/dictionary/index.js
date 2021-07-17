const DictionaryModel = require('../../models/dictionary');

exports.addDictionary = async ({ word, meaning }) => {
  try {
    await DictionaryModel.create({
      word,
      meaning,
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};
