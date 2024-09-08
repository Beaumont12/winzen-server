const mongoose = require('mongoose');

// Define a schema for individual order items
const CanceledOrderItemSchema = new mongoose.Schema({
  Price: { type: Number, required: true },
  ProductName: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Size: { type: String, required: true }
}, { _id: false }); // Prevents creating a separate _id for each order item

// Define the main CanceledOrder schema
const CanceledOrderSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // String type for _id as in your data
  CustomerName: { type: String, required: true },
  Discount: { type: Number, required: true },
  OrderDateTime: { type: String, required: true }, // Could be changed to Date type if appropriate
  Orders: {
    type: Map,
    of: CanceledOrderItemSchema, // Dynamic number of orders with order keys
    required: true
  },
  Preference: { type: String, required: true }, // "Take Out" or other values
  StaffName: { type: String, required: true },
  Subtotal: { type: Number, required: true },
  Total: { type: Number, required: true }
});

module.exports = mongoose.model('CanceledOrder', CanceledOrderSchema);
