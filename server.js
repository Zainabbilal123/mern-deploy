const express = require('express');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});