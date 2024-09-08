const mongoose = require('mongoose');

// Define a schema for individual order items
const HistoryOrderItemSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true }
  }, { _id: false }); // Prevents creating a separate _id for each order item
  
  // Define the main History schema
  const HistorySchema = new mongoose.Schema({
    _id: { type: String, required: true }, // String type for _id as in your data
    customerName: { type: String, required: true },
    discount: { type: Number, required: true },
    orderDateTime: { type: String, required: true }, // Could be changed to Date type if appropriate
    orderItems: {
      type: Map,
      of: HistoryOrderItemSchema, // Dynamic number of order items with order keys
      required: true
    },
    orderNumber: { type: String, required: true }, // Added orderNumber field
    preference: { type: String, required: true }, // "Take Out" or other values
    staffName: { type: String, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true }
  });

module.exports = mongoose.model('History', HistorySchema);