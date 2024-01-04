const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: {
      //   validator: (value) => validator.isEmail(value),
      //   message: 'Invalid email address',
      // },
    },
  });
  

const User = mongoose.model('User', userSchema);

module.exports = User;
