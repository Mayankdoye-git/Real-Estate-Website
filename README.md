# RealTrust - Portfolio & Admin CRUD System

A beginner-friendly full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js).

## 🧱 Tech Stack

- **Frontend**: React.js with Bootstrap 5
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **HTTP Client**: Axios

## 📁 Project Structure

```
realtrust-app/
├── backend/          # Node.js + Express backend
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── server.js     # Main server file
│   └── .env          # Environment variables
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   └── public/
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed on your computer:
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- MongoDB Atlas account - [Sign up free](https://www.mongodb.com/cloud/atlas)

### Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a new cluster (choose the free tier)
3. Click "Connect" and choose "Connect your application"
4. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Save this connection string - you'll need it in Step 3

### Step 2: Install Dependencies

Open your terminal/command prompt and navigate to the project folder.

**Install Backend Dependencies:**
```bash
cd backend
npm install
```

**Install Frontend Dependencies:**
```bash
cd ../frontend
npm install
```

### Step 3: Configure Environment Variables

1. Open the `backend/.env` file
2. Replace the placeholder with your MongoDB Atlas connection string:

```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/realtrust?retryWrites=true&w=majority
PORT=5000
```

**Important**: Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, and `YOUR_CLUSTER` with your actual MongoDB Atlas credentials.

### Step 4: Run the Application

You need to run both backend and frontend servers.

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
```

You should see:
```
✅ Connected to MongoDB Atlas
🚀 Server is running on http://localhost:5000
```

**Terminal 2 - Start Frontend Server:**
```bash
cd frontend
npm start
```

The React app will automatically open in your browser at `http://localhost:3000`

## 📖 How to Use

### Landing Page (User View)

Visit `http://localhost:3000` to see:
- **Projects Section**: Displays all projects from the database
- **Happy Clients Section**: Shows client testimonials
- **Contact Form**: Users can submit their details
- **Newsletter**: Users can subscribe with their email

### Admin Panel

Visit `http://localhost:3000/admin` to:
- **Add Projects**: Enter image URL, title, and description
- **Add Clients**: Enter image URL, name, designation, and review
- **View Contact Messages**: See all contact form submissions
- **View Subscribers**: See all newsletter email subscriptions

## 🎯 Features

### Landing Page
✅ Responsive navbar with navigation links  
✅ Projects section displaying cards with images  
✅ Client testimonials with circular profile images  
✅ Contact form with validation  
✅ Newsletter subscription box  

### Admin Panel
✅ Add new projects with image URL, title, description  
✅ Add new clients with image URL, name, designation, review  
✅ View all contact form submissions  
✅ View all newsletter subscribers  
✅ Delete projects and clients  

## 🔧 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create new client
- `DELETE /api/clients/:id` - Delete client

### Contacts
- `GET /api/contacts` - Get all contact messages
- `POST /api/contacts` - Create new contact message

### Newsletter
- `GET /api/newsletter` - Get all subscribers
- `POST /api/newsletter` - Add new subscriber

## 💡 Beginner Tips

### Understanding the Code

**React Hooks Used:**
- `useState` - Stores data in component (like form inputs, lists)
- `useEffect` - Runs code when component loads (like fetching data)

**Axios Requests:**
- `axios.get()` - Fetch data from backend
- `axios.post()` - Send data to backend
- `axios.delete()` - Delete data from backend

**Bootstrap Classes:**
- `container` - Centers content with padding
- `row` / `col-md-4` - Creates responsive grid layout
- `card` - Creates card components
- `btn btn-primary` - Styled buttons
- `form-control` - Styled form inputs

### Common Issues & Solutions

**Problem**: "Cannot connect to MongoDB"  
**Solution**: Check your `.env` file and make sure the MongoDB URI is correct

**Problem**: "Port 3000 is already in use"  
**Solution**: Close other React apps or change the port

**Problem**: "CORS error"  
**Solution**: Make sure backend server is running on port 5000

## 📝 Code Comments

All code files include detailed comments explaining:
- What each function does
- How React hooks work
- What each API route does
- How Bootstrap classes style the page

## 🎨 Customization

### Change Colors
Edit Bootstrap classes in components:
- `bg-primary` → `bg-success`, `bg-danger`, etc.
- `text-white` → `text-dark`, `text-muted`, etc.

### Add More Fields
1. Update the model in `backend/models/`
2. Update the form in frontend component
3. Update the API route in `backend/routes/`

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Tutorial](https://www.mongodb.com/docs/)
- [Axios Documentation](https://axios-http.com/)

## 🤝 Support

If you encounter any issues:
1. Check that both servers are running
2. Verify MongoDB connection string
3. Check browser console for errors (F12)
4. Check terminal for backend errors

---

**Happy Coding! 🚀**
