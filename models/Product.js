const mongoose = require('mongoose');

// Define a schema for the variations
const VariationSchema = new mongoose.Schema({
  temperature: {
    type: Map,
    of: new mongoose.Schema({
      size: {
        type: Map,
        of: Number
      }
    })
  }
}, { _id: false });

// Define the main Product schema
const ProductSchema = new mongoose.Schema({
  _id: String,
  Category: String,
  Description: String,
  Name: String,
  Variations: VariationSchema,
  imageURL: String,
  stockStatus: String
});

module.exports = mongoose.model('Product', ProductSchema);