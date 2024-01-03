const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/order-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Order routes
const ordersRoutes = require('./routes/orders');
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
