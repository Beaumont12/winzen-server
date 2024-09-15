const jwt = require('jsonwebtoken');
const Staff = require('./models/Staff'); // Adjust the path as needed

const generateToken = (staff) => {
  return jwt.sign({ staffId: staff._id, role: staff.Role }, 'your_jwt_secret', { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { staff_id, email, password } = req.body;

  console.log('Incoming login request:', { staff_id, email });

  if (!staff_id || !email || !password) {
    console.log('Missing fields:', { staff_id, email, password });
    return res.status(400).json({ message: 'Please provide staff_id, email, and password.' });
  }

  try {
    // Find staff by staff_id and email
    const staff = await Staff.findOne({ _id: staff_id, Email: email });
    console.log('Staff found:', staff);

    if (!staff) {
      console.log('Invalid staff ID or email');
      return res.status(401).json({ message: 'Invalid staff ID or email.' });
    }

    // Compare plaintext passwords
    if (password !== staff.Password) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid password.' });
    }

    console.log('Staff role:', staff.Role);
    if (staff.Role !== 'Admin' && staff.Role !== 'Cashier') {
      console.log('Unauthorized role:', staff.Role);
      return res.status(403).json({ message: 'Unauthorized role.' });
    }

    const token = generateToken(staff);
    console.log('Generated token:', token);

    res.status(200).json({
      message: 'Successfully Logged In',
      token,
      staff: {
        id: staff._id,
        name: staff.Name,
        email: staff.Email,
        phone: staff.Phone,
        age: staff.Age,
        birthday: staff.Birthday,
        imageUrl: staff.ImageUrl,
        role: staff.Role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  login,
};
