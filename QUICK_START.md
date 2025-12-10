# 🚀 Quick Start Guide

## Step-by-Step Instructions for Beginners

### 1️⃣ Install Node.js
- Go to https://nodejs.org/
- Download and install the LTS version
- Verify installation: Open terminal and type `node --version`

### 2️⃣ Set Up MongoDB Atlas (Free Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" and create an account
3. Create a new project (name it "RealTrust")
4. Click "Build a Database" → Choose "FREE" tier
5. Choose a cloud provider (AWS recommended)
6. Click "Create Cluster" (wait 3-5 minutes)
7. Click "Connect" → "Connect your application"
8. Copy the connection string (looks like: `mongodb+srv://username:password@...`)

### 3️⃣ Configure the Project

1. Open `backend/.env` file
2. Paste your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/realtrust?retryWrites=true&w=majority
   PORT=5000
   ```
3. Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your actual credentials

### 4️⃣ Install Project Dependencies

Open terminal in the project folder:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 5️⃣ Run the Application

**Open TWO terminal windows:**

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```
Wait for: `✅ Connected to MongoDB Atlas`

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```
Browser will open automatically at `http://localhost:3000`

### 6️⃣ Test the Application

1. **Landing Page**: Visit `http://localhost:3000`
2. **Admin Panel**: Visit `http://localhost:3000/admin`
3. **Add a Project**: Fill the form and click "Add Project"
4. **Check Landing Page**: Go back to home and see your project displayed!

## 🎯 What You Should See

### Backend Terminal:
```
✅ Connected to MongoDB Atlas
🚀 Server is running on http://localhost:5000
```

### Frontend Browser:
- Landing page with navbar
- Empty sections (until you add data from admin)
- Contact form
- Newsletter subscription

### Admin Panel:
- Forms to add projects and clients
- Tables showing all data
- Delete buttons for each item

## ⚠️ Common Issues

### Issue: "Cannot find module"
**Solution**: Run `npm install` in both backend and frontend folders

### Issue: "Port 5000 already in use"
**Solution**: 
- Close other applications using port 5000
- Or change PORT in `.env` file to 5001

### Issue: "MongoDB connection failed"
**Solution**:
- Check your internet connection
- Verify MongoDB Atlas connection string in `.env`
- Make sure you replaced username and password

### Issue: "CORS error in browser"
**Solution**: Make sure backend server is running on port 5000

## 📝 Testing Checklist

- [ ] Backend server starts without errors
- [ ] Frontend opens in browser
- [ ] Can add a project from admin panel
- [ ] Project appears on landing page
- [ ] Can add a client testimonial
- [ ] Client appears on landing page
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Can view contact messages in admin
- [ ] Can view subscribers in admin

## 🎓 Next Steps

1. Add some sample projects and clients
2. Test the contact form
3. Subscribe to newsletter
4. Check admin panel to see all data
5. Try deleting items from admin panel

## 💡 Pro Tips

- Keep both terminal windows open while working
- Use browser DevTools (F12) to see console logs
- Check terminal for backend errors
- Refresh browser if changes don't appear

---

**Need Help?** Check the main README.md file for detailed documentation!
