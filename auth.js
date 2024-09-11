const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Staff = require('./models/Staff'); // Adjust the path as needed

// Utility function to generate a token
const generateToken = (staff) => {
  return jwt.sign({ staffId: staff._id, role: staff.Role }, 'your_jwt_secret', { expiresIn: '1h' });
};

// Login function
const login = async (req, res) => {
  const { staff_id, email, password } = req.body;

  if (!staff_id || !email || !password) {
    return res.status(400).json({ message: 'Please provide staff_id, email, and password.' });
  }

  try {
    // Log incoming request data for debugging
    console.log('Incoming login request:', { staff_id, email });

    // Find staff by staff_id and email
    const staff = await Staff.findOne({ _id: staff_id, Email: email });
    console.log('Staff found:', staff);

    if (!staff) {
      return res.status(401).json({ message: 'Invalid staff ID or email.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, staff.Password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Check if the role is Admin or Cashier
    if (staff.Role !== 'Admin' && staff.Role !== 'Cashier') {
      return res.status(403).json({ message: 'Unauthorized role.' });
    }

    // Generate a token
    const token = generateToken(staff);

    // Respond with success
    res.status(200).json({
      message: 'Successfully Logged In',
      token, // Send token to client
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  login,
};
