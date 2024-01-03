// user/controllers/userController.js
const User = require('../models/User');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getUserById: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    const { name, email } = req.body;
    try {
      // Validate input
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }
  
      const newUser = new User({ name, email });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Error adding user', details: error.message });
    }
  },

  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      await User.findByIdAndDelete(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
