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

			console.log("Called /api/jammer/start");

			if (jammer_handler.isAttackOn()) {
				res.send("warning__attack_already_in_progress");
				return;
			}

			// Turn on jammer
			jammer_handler.startJammer();

      res.send("jamming_started");
    }
  );

	// Route to stop jammer action
  // Path: /api/jammer/stop
  // Type: GET
  app.get(
    '/api/jammer/stop',
    (req, res) => {
			console.log("Called /api/jammer/stop");

			if (!jammer_handler.isAttackOn()) {
				res.send("warning__attack_not_in_progress");
				return;
			}

			jammer_handler.stopJammer();
      res.send("jamming_stopped");
    }
  );

	// Route to get log from jammer
  // Path: /api/jammer/get_data
  // Type: GET
  app.get(
    '/api/jammer/get_data',
    (req, res) => {
			console.log("Called /api/jammer/get_data");

			if (jammer_handler.isAttackOn()) {
				res.send("warning__attack_not_in_progress");
				return;
			}

			let target = jammer_handler.getJammingLog();
			if (target === 'attack_not_in_progress') {
				res.send("warning__attack_not_in_progress");
				return;
			}

      res.json(target);
    }
  );

}; // module.exports = app =>
