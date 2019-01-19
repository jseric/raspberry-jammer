// File name: attack_handlers/jammerHandler.js
// Description: Jammer functionality handler
// Date created: 14th January 2018
// Author: Josip Seric

// Import modules
const spawn = require('child_process').spawn;

let isRunning = false;
var jammerScript;

const jammerScriptPath 	  = 'wifijammer';
const jammerScriptOptions = {};

module.exports = {

	// Check if an attack is running
	isAttackOn: () => {
		return isRunning;
	},

	// Start jamming attack
	startJammer: (data) => {
		// Check the running flag
		if (isRunning)
			return;

		// Check if params are present
		if (typeof data.time_val == 'undefined' ||
				typeof data.macs 	   == 'undefined')
		  return;

		// TODO
		let jammerScriptArgs = [
			jammerScriptPath,
			'-a ' + data.macs
		];

		// Set the running flag to true
		isRunning = true;

		// Start attack script
		jammerScript.spawn(
			'python',
			[
				// Args here
			],
			{
				// Options here
			}
		); // jammerScript.spawn

	}, // startJammer: (data)

	// End jamming attack
	stopJammer: () => {
		if (!isRunning)
			return;

		isRunning = false;
		jammerScript.kill();
	},

	getJammingLog: () => {
		if (!isRunning)
			return;

		// TODO
	}

}; // module.exports
