// File name: routes/jammerRoutes.js
// Description: API routes
// Date created: 14th January 2018
// Author: Josip Seric

// Module imports
const jammer_handler = require('../attack_handlers/jammerHandler');

// Export routes
module.exports = app => {

  // Route to start jammer action
  // Path: /api/jammer/start
  // Type: GET
  app.get(
    '/api/jammer/start',
    (req, res) => {
			if (jammer_handler.isAttackOn()) {
				res.send("warning__attack_already_in_progress");
				return;
			}

			// Turn on jammer
			jammer_handler.startJammer();

      res.send("jamming_started");
    } // (req, res)
  ); // app.get

	// Route to stop jammer action
  // Path: /api/jammer/stop
  // Type: GET
  app.get(
    '/api/jammer/stop',
    (req, res) => {
			if (!jammer_handler.isAttackOn()) {
				res.send("warning__attack_not_in_progress");
				return;
			}

			jammer_handler.stopJammer();
      res.send("jamming_stopped");
    } // (req, res)
  ); // app.get

	// Route to get log from jammer
  // Path: /api/jammer/get_data
  // Type: GET
  app.get(
    '/api/jammer/get_data',
    (req, res) => {
			if (!jammer_handler.isAttackOn()) {
				res.send("warning__attack_not_in_progress");
				return;
			}

			let target = jammer_handler.getJammingLog();
			if (target === 'attack_not_in_progress') {
				res.send("warning__attack_not_in_progress");
				return;
			}

      res.json(target);
    } // (req, res)
  ); // app.get

}; // module.exports = app
