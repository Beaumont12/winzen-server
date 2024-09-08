const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  _id: String,
  Age: Number,
  Birthday: {
    Date: Number,
    Month: Number,
    Year: Number
  },
  Email: String,
  ImageUrl: String,
  Name: String,
  Password: String,
  Phone: String,
  Role: String
});

module.exports = mongoose.model('Staff', StaffSchema);
