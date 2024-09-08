const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models
const Product = require('./models/Product');
const Canceled = require('./models/Canceled');
const Category = require('./models/Category');
const History = require('./models/History');
const Order = require('./models/Order');
const ProductCount = require('./models/ProductCount');
const StaffCount = require('./models/StaffCount');
const Staff = require('./models/Staff');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://relginpaloma12:119789090256@winzen.sb5de.mongodb.net/?retryWrites=true&w=majority&appName=Winzen')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// Products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Canceled Orders
app.get('/canceled', async (req, res) => {
  try {
    const canceled = await Canceled.find();
    res.json(canceled);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Categories
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// History
app.get('/history', async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Product Count
app.get('/product-count', async (req, res) => {
  try {
    const productCount = await ProductCount.findOne();
    res.json(productCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Staff Count
app.get('/staff-count', async (req, res) => {
  try {
    const staffCount = await StaffCount.findOne();
    res.json(staffCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Staff
app.get('/staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});