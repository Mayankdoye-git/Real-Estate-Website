// Script to add sample data to the database
const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Client = require('./models/Client');
const Project = require('./models/Project');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.log('❌ MongoDB connection error:', error));

// Sample clients data
const sampleClients = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Brandon Smith',
    designation: 'CEO, Tech Solutions',
    review: 'RealTrust helped us find the perfect office space. Their professionalism and attention to detail made the entire process smooth and hassle-free.'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Shilpa Kapoor',
    designation: 'Interior Designer',
    review: 'Excellent service! They understood our requirements perfectly and delivered beyond expectations. Highly recommend for anyone looking for quality real estate solutions.'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
    name: 'John Lagoon',
    designation: 'Business Owner',
    review: 'Working with RealTrust was a great experience. They provided multiple options and guided us through every step. Very satisfied with our new property!'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Mary Freeman',
    designation: 'Marketing Manager',
    review: 'Professional team with great market knowledge. They helped us find our dream home within our budget. Thank you RealTrust for making it possible!'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/90.jpg',
    name: 'Lucy Anderson',
    designation: 'Entrepreneur',
    review: 'Outstanding service from start to finish. The team was responsive, knowledgeable, and truly cared about finding the right property for us.'
  }
];

// Sample projects data
const sampleProjects = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    title: 'Modern Villa Design',
    description: 'Luxury 4BHK villa with contemporary architecture and premium amenities in prime location.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    title: 'Residential Complex',
    description: 'Spacious apartments with world-class facilities, swimming pool, and 24/7 security.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
    title: 'Commercial Plaza',
    description: 'Prime commercial space in business district with excellent connectivity and parking.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
    title: 'Luxury Penthouse',
    description: 'Exclusive penthouse with panoramic city views, private terrace, and premium interiors.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
    title: 'Smart Homes',
    description: 'Technology-enabled homes with automated systems, energy efficiency, and modern design.'
  }
];

// Function to seed data
async function seedDatabase() {
  try {
    // Clear existing data
    await Client.deleteMany({});
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample clients
    await Client.insertMany(sampleClients);
    console.log('✅ Added 5 sample clients');

    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('✅ Added 5 sample projects');

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
