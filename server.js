// Import required modules
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(session({
    secret: 'your_secret_key', // Change this to a random secret key
    resave: false,
    saveUninitialized: true,
}));

// Routes

// Home Route
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html if logged in
    } else {
        res.redirect('/login'); // Redirect to login if not logged in
    }
});

// Login Route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serve login.html
});

// Handle Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check the credentials against the specified values
    if (email === 'hari@gmail.com' && password === 'admin') { // Updated credentials
        req.session.loggedIn = true; // Set session variable
        res.redirect('/'); // Redirect to home after successful login
    } else {
        res.send('Invalid credentials, please try again.'); // Handle invalid login
    }
});

// Logout Route
app.get('/logout', (req, res) => {
    req.session.destroy(); // Destroy session
    res.redirect('/login'); // Redirect to login page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/login`);
});