# 🔧 Troubleshooting Guide

Common issues and their solutions for beginners.

## 🚨 Backend Issues

### Error: "Cannot find module 'express'"

**Problem**: Dependencies not installed

**Solution**:
```bash
cd backend
npm install
```

### Error: "MongooseServerSelectionError"

**Problem**: Cannot connect to MongoDB Atlas

**Solutions**:
1. Check your internet connection
2. Verify `.env` file has correct MongoDB URI
3. Make sure you replaced `<username>` and `<password>` with actual credentials
4. Check if your IP address is whitelisted in MongoDB Atlas:
   - Go to MongoDB Atlas dashboard
   - Click "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)

### Error: "Port 5000 is already in use"

**Problem**: Another application is using port 5000

**Solution 1** - Change the port:
```
# In backend/.env file
PORT=5001
```

**Solution 2** - Kill the process using port 5000:

**Windows**:
```bash
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux**:
```bash
lsof -ti:5000 | xargs kill -9
```

### Error: "EADDRINUSE: address already in use"

**Problem**: Server is already running

**Solution**: Close the previous terminal running the backend server

## 🌐 Frontend Issues

### Error: "Cannot find module 'react'"

**Problem**: Dependencies not installed

**Solution**:
```bash
cd frontend
npm install
```

### Error: "Port 3000 is already in use"

**Problem**: Another React app is running

**Solution**: 
- Close other React applications
- Or press `Y` when asked "Would you like to run the app on another port instead?"

### Error: "Failed to compile"

**Problem**: Syntax error in code

**Solution**: Check the terminal for the exact error location and fix the syntax

### Blank Page in Browser

**Problem**: JavaScript error

**Solution**:
1. Open browser DevTools (Press F12)
2. Check Console tab for errors
3. Look for red error messages
4. Fix the error mentioned

## 🔗 Connection Issues

### Error: "Network Error" in browser console

**Problem**: Frontend cannot connect to backend

**Solutions**:
1. Make sure backend server is running on port 5000
2. Check if `http://localhost:5000` is accessible in browser
3. Verify CORS is enabled in `backend/server.js`

### Error: "CORS policy blocked"

**Problem**: CORS not configured properly

**Solution**: Make sure this line exists in `backend/server.js`:
```javascript
app.use(cors());
```

### Data Not Showing on Landing Page

**Problem**: No data in database or fetch error

**Solutions**:
1. Add data from Admin Panel first
2. Check browser console (F12) for errors
3. Check if backend API is returning data:
   - Open `http://localhost:5000/api/projects` in browser
   - Should see JSON data
4. Check network tab in DevTools to see API calls

## 📦 MongoDB Issues

### Error: "Authentication failed"

**Problem**: Wrong username or password in MongoDB URI

**Solution**:
1. Go to MongoDB Atlas
2. Click "Database Access"
3. Verify username
4. Reset password if needed
5. Update `.env` file with new credentials

### Error: "Database not found"

**Problem**: Database name not specified

**Solution**: Make sure your MongoDB URI includes database name:
```
mongodb+srv://username:password@cluster.mongodb.net/realtrust?retryWrites=true&w=majority
```
Note the `/realtrust` part - that's your database name

### Cannot See Data in MongoDB Atlas

**Problem**: Data not saved or wrong database

**Solution**:
1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Select "realtrust" database
4. Check if collections exist (projects, clients, contacts, newsletters)

## 🖥️ Installation Issues

### Error: "npm: command not found"

**Problem**: Node.js not installed

**Solution**:
1. Download Node.js from https://nodejs.org/
2. Install it
3. Restart terminal
4. Verify: `node --version`

### Error: "Permission denied"

**Problem**: Need administrator privileges

**Solution**:

**Windows**: Run terminal as Administrator

**Mac/Linux**: Use `sudo`:
```bash
sudo npm install
```

## 🎨 Display Issues

### Bootstrap Styles Not Working

**Problem**: Bootstrap CSS not loaded

**Solution**: Check `frontend/public/index.html` has this line:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

### Images Not Displaying

**Problem**: Invalid image URL

**Solutions**:
1. Check if image URL is accessible in browser
2. Use valid image URLs (see SAMPLE_DATA.md)
3. Make sure URL starts with `http://` or `https://`

### Layout Broken on Mobile

**Problem**: Bootstrap responsive classes not applied

**Solution**: Make sure viewport meta tag exists in `frontend/public/index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## 🐛 Debugging Tips

### How to Check Backend Logs

Look at the terminal where backend is running:
- Green messages = Success
- Red messages = Errors
- Look for error stack traces

### How to Check Frontend Errors

1. Open browser DevTools (F12)
2. Go to "Console" tab
3. Look for red error messages
4. Click on error to see details

### How to Check API Calls

1. Open browser DevTools (F12)
2. Go to "Network" tab
3. Perform an action (like submitting form)
4. Look for API calls (they'll be red if failed)
5. Click on call to see request/response details

### How to Check Database

1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Select your database
4. View data in each collection

## 📝 Common Mistakes

### Mistake 1: Not Starting Backend Server

**Symptom**: Frontend loads but no data appears

**Fix**: Make sure backend server is running in a separate terminal

### Mistake 2: Wrong MongoDB URI

**Symptom**: Backend shows "MongoDB connection error"

**Fix**: Double-check `.env` file has correct connection string

### Mistake 3: Not Installing Dependencies

**Symptom**: "Cannot find module" errors

**Fix**: Run `npm install` in both backend and frontend folders

### Mistake 4: Using Wrong Port

**Symptom**: Cannot connect to API

**Fix**: Backend should run on port 5000, frontend on port 3000

### Mistake 5: Forgetting to Save Files

**Symptom**: Changes not reflecting

**Fix**: Save all files (Ctrl+S or Cmd+S) before testing

## 🆘 Still Having Issues?

### Checklist Before Asking for Help

- [ ] Node.js is installed (`node --version` works)
- [ ] Dependencies installed in both folders (`npm install`)
- [ ] MongoDB Atlas connection string is correct in `.env`
- [ ] Backend server is running (port 5000)
- [ ] Frontend server is running (port 3000)
- [ ] No errors in backend terminal
- [ ] No errors in browser console (F12)
- [ ] Internet connection is working

### How to Report an Issue

When asking for help, provide:
1. **What you were trying to do**
2. **What happened instead**
3. **Error message** (copy the full error)
4. **Screenshot** of the error
5. **Which step** you're stuck on

### Restart Everything

Sometimes the best solution is to restart:
1. Close both terminal windows
2. Close browser
3. Start backend server
4. Start frontend server
5. Open browser and test again

---

**Remember**: Every developer faces these issues. Don't give up! 💪
