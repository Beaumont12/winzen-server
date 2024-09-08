const mongoose = require('mongoose');

// Define the schema for individual order items
const OrderItemSchema = new mongoose.Schema({
  price: Number,
  productName: String,
  quantity: Number,
  size: String
}, { _id: false });

// Define the main History schema
const HistorySchema = new mongoose.Schema({
  _id: String,
  customerName: String,
  discount: Number,
  orderDateTime: String,
  orderItems: {
    type: Map,
    of: OrderItemSchema
  },
  orderNumber: String,
  preference: String,
  staffName: String,
  subtotal: Number,
  total: Number
});

module.exports = mongoose.model('History', HistorySchema);