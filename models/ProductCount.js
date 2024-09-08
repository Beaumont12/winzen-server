const mongoose = require('mongoose');

const ProductCountSchema = new mongoose.Schema({
  _id: String,
  count: Number
});

module.exports = mongoose.model('ProductCount', ProductCountSchema);
