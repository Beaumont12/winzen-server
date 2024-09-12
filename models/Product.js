const mongoose = require('mongoose');

// Define a schema for the sizes without _id
const SizeSchema = new mongoose.Schema({
  size: String,
  price: Number
}, { _id: false });

// Define a schema for variations
const VariationSchema = new mongoose.Schema({
  temperature: {
    hot: [SizeSchema],
    iced: [SizeSchema]
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
}, { collection: 'products' });

module.exports = mongoose.model('Product', ProductSchema);
