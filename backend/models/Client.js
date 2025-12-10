// Import mongoose to create database schema
const mongoose = require('mongoose');

// Define the structure of a Client document in MongoDB
const clientSchema = new mongoose.Schema({
  // Client's profile image URL
  imageUrl: {
    type: String,
    required: true
  },
  // Client's full name
  name: {
    type: String,
    required: true
  },
  // Client's job title or designation (e.g., CEO, Designer)
  designation: {
    type: String,
    required: true
  },
  // Client's testimonial/review text
  review: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create and export the Client model
module.exports = mongoose.model('Client', clientSchema);
