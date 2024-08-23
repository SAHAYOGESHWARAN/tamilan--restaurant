const express = require('express');
const { createFoodItem, getOrders } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/food', authMiddleware, createFoodItem);
router.get('/orders', authMiddleware, getOrders);

module.exports = router;
