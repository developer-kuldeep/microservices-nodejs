const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()); // Use cors middleware

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/user-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User routes
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
