const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models
const Product = require('./models/Product');
const CanceledOrder = require('./models/CanceledOrder');
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
mongoose.connect('mongodb+srv://relginpaloma12:119789090256@winzen.sb5de.mongodb.net/winzenDB?retryWrites=true&w=majority&appName=Winzen')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Fetched products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Canceled Orders
app.get('/canceled', async (req, res) => {
  try {
    const canceled = await CanceledOrder.find();
    console.log('Fetched canceled:', canceled);
    if (canceled.length === 0) {
        console.log('No canceled orders found');
      }
    res.json(canceled);
  } catch (error) {
    console.error('Error fetching canceled:', error);
    res.status(500).json({ message: 'Error fetching canceled orders', error: error.message });
  }
});

// Categories
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    console.log('Fetched categories:', categories);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

// History
app.get('/history', async (req, res) => {
  try {
    const history = await History.find();
    console.log('Fetched history:', history);
    res.json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ message: 'Error fetching history', error: error.message });
  }
});

// Orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    console.log('Fetched orders:', orders);
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Product Count
app.get('/product-count', async (req, res) => {
    try {
      const productCount = await ProductCount.findOne();
      if (!productCount) {
        return res.status(404).json({ message: 'Product count not found' });
      }
      res.json(productCount);
    } catch (error) {
      console.error('Error fetching product count:', error);
      res.status(500).json({ message: 'Error fetching product count', error: error.message });
    }
  });
  
  // Staff Count
  app.get('/staff-count', async (req, res) => {
    try {
      const staffCount = await StaffCount.findOne();
      if (!staffCount) {
        return res.status(404).json({ message: 'Staff count not found' });
      }
      res.json(staffCount);
    } catch (error) {
      console.error('Error fetching staff count:', error);
      res.status(500).json({ message: 'Error fetching staff count', error: error.message });
    }
  });  

// Staff
app.get('/staff', async (req, res) => {
  try {
    const staffs = await Staff.find();
    console.log('Fetched staffs:', staffs);
    res.json(staffs);
  } catch (error) {
    console.error('Error fetching staffs:', error);
    res.status(500).json({ message: 'Error fetching staff members', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
