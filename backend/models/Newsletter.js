// Import mongoose to create database schema
const mongoose = require('mongoose');

// Define the structure of a Newsletter subscription in MongoDB
const newsletterSchema = new mongoose.Schema({
  // Subscriber's email address
  email: {
    type: String,
    required: true,
    unique: true  // Prevent duplicate email subscriptions
  }
}, { timestamps: true });

// Create and export the Newsletter model
module.exports = mongoose.model('Newsletter', newsletterSchema);
