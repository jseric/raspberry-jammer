// File name: index.js
// Description: Root file for server
// Date created: 14th January 2018
// Author: Josip Seric

// Module imports
const express = require('express');

// Create a new express app and define port
const app = express();
const PORT = 5000;

const is_rpi = false;

// Import routes
require('./routes/jammerRoutes')(app);

// Redirect unhandled requests to client

let client_base_url = '';

if (!is_rpi)
	client_base_url = 'http://localhost:3000';
else
	client_base_url = 'http://10.3.141.1:3000';

// Redirection routes for client
// Path: /*
// Note: every route that is not previously defined
// Type: GET
app.get(
	'*',
	(req,res) => {
		const targetUrl = client_base_url + req.originalUrl;
  	res.redirect(targetUrl);
	}
);

// Start web server
app.listen(PORT);
