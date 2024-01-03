const Order = require('../models/Order');

const OrderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getOrderById: async (req, res) => {
    const { orderId } = req.params;
    try {
      const order = await Order.findById(orderId);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createOrder: async (req, res) => {
    const { product, quantity } = req.body;
    try {
      const newOrder = new Order({ product, quantity });
      const savedOrder = await newOrder.save();
      res.json(savedOrder);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateOrder: async (req, res) => {
    const { orderId } = req.params;
    const { product, quantity } = req.body;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { product, quantity },
        { new: true }
      );
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteOrder: async (req, res) => {
    const { orderId } = req.params;
    try {
      await Order.findByIdAndDelete(orderId);
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = OrderController;
