const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
