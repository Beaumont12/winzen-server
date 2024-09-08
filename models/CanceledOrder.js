const mongoose = require('mongoose');

// Define the schema for individual order items
const OrderItemSchema = new mongoose.Schema({
  Price: Number,
  ProductName: String,
  Quantity: Number,
  Size: String
}, { _id: false });

// Define the main CanceledOrder schema
const CanceledOrderSchema = new mongoose.Schema({
  _id: String,
  CustomerName: String,
  Discount: Number,
  OrderDateTime: String,
  Orders: {
    type: Map,
    of: OrderItemSchema
  },
  Preference: String,
  StaffName: String,
  Subtotal: Number,
  Total: Number
}, { collection: 'canceled' });

module.exports = mongoose.model('CanceledOrder', CanceledOrderSchema);