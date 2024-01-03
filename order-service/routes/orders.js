const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.get('/', OrderController.getAllOrders);
router.get('/:orderId', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.put('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);

module.exports = router;
