// Import express to create routes
const express = require('express');
const router = express.Router();

// Import the Project model to interact with database
const Project = require('../models/Project');

// GET all projects - Fetch all projects from database
router.get('/', async (req, res) => {
  try {
    // Find all projects in the database
    const projects = await Project.find();
    // Send projects as JSON response
    res.json(projects);
  } catch (error) {
    // If error occurs, send error message
    res.status(500).json({ message: error.message });
  }
});

// POST - Create a new project
router.post('/', async (req, res) => {
  // Create a new project object with data from request body
  const project = new Project({
    imageUrl: req.body.imageUrl,
    title: req.body.title,
    description: req.body.description
  });

  try {
    // Save the new project to database
    const newProject = await project.save();
    // Send the created project back with 201 status (Created)
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove a project by ID
router.delete('/:id', async (req, res) => {
  try {
    // Find project by ID and delete it
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the router to use in server.js
module.exports = router;
