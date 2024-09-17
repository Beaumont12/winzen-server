const mongoose = require('mongoose');

// Define a schema for individual order items
const OrderItemSchema = new mongoose.Schema({
  Price: { type: Number, required: true },        // Price of the product, required
  ProductName: { type: String, required: true },  // Name of the product, required
  Quantity: { type: Number, required: true },     // Quantity of the product, required
  Size: { type: String, required: true },         // Size of the product (e.g., "16oz"), required
  Variation: { type: String },    // Variation of the product (e.g., "Hot", "Cold"), required
}, { _id: false });

// Define the main Order schema
const OrderSchema = new mongoose.Schema({
  _id: { type: String, required: true },           // Order ID (string)
  CustomerName: { type: String, required: true },  // Customer's name, required
  Discount: { type: Number, default: 0 },          // Discount applied to the order, default is 0
  OrderDateTime: { type: String, required: true }, // Date and time of the order, required
  OrderItems: {
    type: Map,
    of: OrderItemSchema,
    required: true                                  // Ensure that order items are always included
  },
  Preference: { type: String, required: true },    // Preference like "Dine In" or "Take Out", required
  StaffName: { type: String, required: true },     // Staff member's name who took the order, required
  Subtotal: { type: Number, required: true },      // Subtotal before discount, required
  Total: { type: Number, required: true }          // Total amount after discount, required
}, { collection: 'orders', versionKey: false });  // versionKey: false removes __v

// Create and export the model
module.exports = mongoose.model('Order', OrderSchema);
