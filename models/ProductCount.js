const mongoose = require('mongoose');

const ProductCountSchema = new mongoose.Schema({
  _id: String,
  count: Number
}, { collection: 'productCount' });

module.exports = mongoose.model('ProductCount', ProductCountSchema);
