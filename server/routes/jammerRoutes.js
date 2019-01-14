// File name: routes/jammerRoutes.js
// Description: API routes
// Date created: 14th January 2018
// Author: Josip Seric

// Export routes
module.exports = app => {

  // Root route
  // Path: /
  // Type: GET
  app.get(
    '/',
    (req, res) => {
      res.send("Hello world!");
    }
  );

  // API test route
  // Path: /api/test
  // Type: GET
  app.get(
    '/api/test',
    (req, res) => {
      res.send("Hello");
    }
  );


};
