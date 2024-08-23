const Food = require('../models/Food');
const Order = require('../models/Order');

exports.createFoodItem = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    try {
        const newFood = new Food({ name, description, price, category, image });
        await newFood.save();
        res.json(newFood);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('items');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
