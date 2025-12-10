// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware - These run before our routes
app.use(cors());  // Allow frontend to connect to backend
app.use(express.json());  // Parse JSON data from requests

// Import route files
const projectsRouter = require('./routes/projects');
const clientsRouter = require('./routes/clients');
const contactsRouter = require('./routes/contacts');
const newsletterRouter = require('./routes/newsletter');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => {
    console.log('❌ MongoDB connection error:', error.message);
    console.log('⚠️  Server will run but database operations will fail.');
    console.log('💡 Please install MongoDB locally or use MongoDB Atlas.');
  });

// Define API routes
app.use('/api/projects', projectsRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/newsletter', newsletterRouter);

// Root route - Test if server is running
app.get('/', (req, res) => {
  res.json({ message: 'RealTrust API is running!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
