const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const winston = require('winston'); // Add winston for logging

// Import models
const Product = require('./models/Product');
const Canceled = require('./models/CanceledOrder');
const Category = require('./models/Category');
const History = require('./models/History');
const Order = require('./models/Order');
const ProductCount = require('./models/ProductCount');
const StaffCount = require('./models/StaffCount');
const Staff = require('./models/Staff');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ],
});

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://relginpaloma12:119789090256@winzen.sb5de.mongodb.net/?retryWrites=true&w=majority&appName=Winzen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    logger.info('Fetched products:', { products });
    res.json(products);
  } catch (error) {
    logger.error('Error fetching products:', { error });
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Canceled Orders
app.get('/canceled', async (req, res) => {
  try {
    const canceled = await Canceled.find();
    logger.info('Fetched canceled:', { canceled });
    res.json(canceled);
  } catch (error) {
    logger.error('Error fetching canceled:', { error });
    res.status(500).json({ message: 'Error fetching canceled orders', error: error.message });
  }
});

// Categories
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    logger.info('Fetched categories:', { categories });
    res.json(categories);
  } catch (error) {
    logger.error('Error fetching categories:', { error });
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

// History
app.get('/history', async (req, res) => {
  try {
    const history = await History.find();
    logger.info('Fetched history:', { history });
    res.json(history);
  } catch (error) {
    logger.error('Error fetching history:', { error });
    res.status(500).json({ message: 'Error fetching history', error: error.message });
  }
});

// Orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    logger.info('Fetched orders:', { orders });
    res.json(orders);
  } catch (error) {
    logger.error('Error fetching orders:', { error });
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Product Count
app.get('/product-count', async (req, res) => {
  try {
    const productCount = await ProductCount.findOne();
    logger.info('Fetched productCount:', { productCount });
    res.json(productCount);
  } catch (error) {
    logger.error('Error fetching productCount:', { error });
    res.status(500).json({ message: 'Error fetching product count', error: error.message });
  }
});

// Staff Count
app.get('/staff-count', async (req, res) => {
  try {
    const staffCount = await StaffCount.findOne();
    logger.info('Fetched staffCount:', { staffCount });
    res.json(staffCount);
  } catch (error) {
    logger.error('Error fetching staffCount:', { error });
    res.status(500).json({ message: 'Error fetching staff count', error: error.message });
  }
});

// Staff
app.get('/staff', async (req, res) => {
  try {
    const staffs = await Staff.find();
    logger.info('Fetched staffs:', { staffs });
    res.json(staffs);
  } catch (error) {
    logger.error('Error fetching staffs:', { error });
    res.status(500).json({ message: 'Error fetching staff members', error: error.message });
  }
});

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
});