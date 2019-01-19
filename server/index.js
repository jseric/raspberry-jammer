// File name: index.js
// Description: Root file for server
// Date created: 14th January 2018
// Author: Josip Seric

// Module imports
const express = require('express');

// Create a new express app and define port
const app = express();
const PORT = 5000;

// Import routes
require('./routes/jammerRoutes')(app);


// Start web server
app.listen(PORT);
