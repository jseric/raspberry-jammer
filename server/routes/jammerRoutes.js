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
	// Params: {
	// 	time_val: int,
	//	macs: [int]
	// }
  // Type: GET
  app.get(
    '/api/jammer/start',
    (req, res) => {
			// TODO

			if (jammer_handler.isAttackOn()) {
				res.send("Attack is already working!!!");
				return;
			}

			// Turn on jammer
			// startJammer(req.query);

      res.send("Jamming started!");
    }
  );

	// Route to stop jammer action
  // Path: /api/jammer/stop
  // Type: GET
  app.get(
    '/api/jammer/stop',
    (req, res) => {
			// TODO
      res.send("Jamming stopped!");
    }
  );

	// Route to get log from jammer
  // Path: /api/jammer/get_data
  // Type: GET
  app.get(
    '/api/jammer/get_data',
    (req, res) => {
			// TODO

			let target = jammer_handler.getJammingLog();

			/*for (let i = 0; i < target.length; i++)
				console.log(target[i]);*/

      res.json(target);
    }
  );

}; // module.exports = app =>
