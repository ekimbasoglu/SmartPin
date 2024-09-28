const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const redis = require('redis');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

// Redis Connection
const redisClient = redis.createClient();
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Imports 
const users = require('./routes/User');
const maps = require('./routes/Map');

//Routers
app.use('/legacy/user', users);
app.use('/legacy/map', maps);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
