const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// ROUTES - Add these FIRST
app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Your other routes (auth, posts, etc.)
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// 404 handler - LAST
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});