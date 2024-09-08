const mongoose = require('mongoose');

// Define a schema for individual order items
const OrderItemSchema = new mongoose.Schema({
  Price: Number,
  ProductName: String,
  Quantity: Number,
  Size: String
}, { _id: false });

// Define the main Order schema
const OrderSchema = new mongoose.Schema({
  _id: String,
  CustomerName: String,
  Discount: Number,
  OrderDateTime: Date,
  // Use Map for dynamic order items
  OrderItems: {
    type: Map,
    of: OrderItemSchema
  },
  Preference: String,
  StaffName: String,
  Subtotal: Number,
  Total: Number
});

// Create and export the model
module.exports = mongoose.model('Order', OrderSchema);