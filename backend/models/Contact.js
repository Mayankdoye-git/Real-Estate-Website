// Import mongoose to create database schema
const mongoose = require('mongoose');

// Define the structure of a Contact form submission in MongoDB
const contactSchema = new mongoose.Schema({
  // User's full name
  fullName: {
    type: String,
    required: true
  },
  // User's email address
  email: {
    type: String,
    required: true
  },
  // User's phone number
  phone: {
    type: String,
    required: true
  },
  // User's city
  city: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create and export the Contact model
module.exports = mongoose.model('Contact', contactSchema);
