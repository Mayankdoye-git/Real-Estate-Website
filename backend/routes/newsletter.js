// Import express to create routes
const express = require('express');
const router = express.Router();

// Import the Newsletter model
const Newsletter = require('../models/Newsletter');

// GET all newsletter subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Add a new newsletter subscriber
router.post('/', async (req, res) => {
  const subscriber = new Newsletter({
    email: req.body.email
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

module.exports = router;
