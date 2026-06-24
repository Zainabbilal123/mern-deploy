require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Railway server is running!',
        timestamp: new Date().toISOString()
    });
});
app.get('/', (req, res) => {
    res.json({ 
        status: 'success',
        message: 'MERN Blog API is running!',
        endpoints: {
            auth: '/auth/register, /auth/login',
            posts: '/posts',
            health:'/health'
        }
    });
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
});