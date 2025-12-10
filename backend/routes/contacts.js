// Import express to create routes
const express = require('express');
const router = express.Router();

// Import the Contact model
const Contact = require('../models/Contact');

// GET all contact form submissions
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Create a new contact form submission
router.post('/', async (req, res) => {
  const contact = new Contact({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
