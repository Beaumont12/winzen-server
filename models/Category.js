const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id: String,
  Name: String
});

module.exports = mongoose.model('Category', CategorySchema);
