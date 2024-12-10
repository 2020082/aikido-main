import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = process.env.SECRET_KEY;

const adminCredentials = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,  // Hashed password from .env
};

export default async function handler(req, res) {
  const { username, password } = req.body;

  // Log the provided credentials and stored credentials
  console.log('Provided Username:', username);
  console.log('Stored Admin Username:', adminCredentials.username);
  console.log('Provided Password:', password);
  console.log('Stored Hashed Admin Password:', adminCredentials.password);

  // Check if the username matches
  if (username === adminCredentials.username) {
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, adminCredentials.password);

    // Log if password is valid or not
    console.log('Is password valid?', isPasswordValid);

    if (isPasswordValid) {
      // Generate JWT token with the username
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
      console.log('Generated Token:', token);
      return res.status(200).json({ token });
    }
  }

  // Log in case of invalid credentials
  console.log('Invalid credentials');
  return res.status(401).json({ message: 'Invalid credentials' });
}
