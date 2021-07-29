const DictionaryModel = require('../../models/dictionary');

const listData = async () => {
  try {
    const data = await DictionaryModel.find({}).exec();
    return boards;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getDataById = async (dataId) => {
  try {
    const data = await DictionaryModel.findOne({ id: dataId }).exec();
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const addData = async ({ word, meaning }) => {
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

const updateData = async ({ dataId, word, meaning }) => {
  try {
    const query = { _id: dataId };
    await DictionaryModel.updateOne(query, {
      word,
      meaning,
    }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

const deleteData = async ({ dataId }) => {
  try {
    const query = { id: dataId };
    await DictionaryModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = {
  listData,
  getDataById,
  addData,
  updateData,
  deleteData,
};
