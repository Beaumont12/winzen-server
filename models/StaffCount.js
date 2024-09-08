const mongoose = require('mongoose');

const StaffCountSchema = new mongoose.Schema({
  _id: String,
  count: Number
});

module.exports = mongoose.model('StaffCount', StaffCountSchema);
