// Import express to create routes
const express = require('express');
const router = express.Router();

// Import the Client model
const Client = require('../models/Client');

// GET all clients - Fetch all client testimonials
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Create a new client testimonial
router.post('/', async (req, res) => {
  const client = new Client({
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    designation: req.body.designation,
    review: req.body.review
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove a client by ID
router.delete('/:id', async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
