// Import mongoose to create database schema
const mongoose = require('mongoose');

// Define the structure of a Project document in MongoDB
const projectSchema = new mongoose.Schema({
  // Image URL for the project (stored as text/string)
  imageUrl: {
    type: String,
    required: true  // This field is mandatory
  },
  // Project title/name
  title: {
    type: String,
    required: true
  },
  // Project description
  description: {
    type: String,
    required: true
  },
  // Automatically add createdAt and updatedAt timestamps
}, { timestamps: true });

// Create and export the Project model
// This allows us to perform CRUD operations on the 'projects' collection
module.exports = mongoose.model('Project', projectSchema);
