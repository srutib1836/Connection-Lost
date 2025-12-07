const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data from the frontend
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Use our game routes for any API calls
app.use('/api', gameRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running securely at http://localhost:${PORT}`);
});