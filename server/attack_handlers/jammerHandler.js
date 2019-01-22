// File name: attack_handlers/jammerHandler.js
// Description: Jammer functionality handler
// Date created: 14th January 2018
// Author: Josip Seric

// Import modules
const spawn = require('child_process').spawn;

// Dummy data
let console_output = {
	"data" : []
};

let isRunning = false;
var jammerScript;

let pythonVersion = 'python';
let attackScript  = 'attackScript.py';

module.exports = {

	// Check if an attack is running
	isAttackOn: () => {
		return isRunning;
	}, // isAttackOn: ()

	// Start jamming attack
	startJammer: () => {
		// Check the running flag
		if (isRunning)
			return;

		// Set the running flag to true
		isRunning = true;

		// Reset log
		console_output.data = [];

		// Start attack script
		jammerScript = spawn(
			pythonVersion,
			[
				'./attack_handlers/' + attackScript
			],
			{
				uid: 0, // Root UID
				gid: 0  // Root GID
			}
		);

		let output = String('');

		// Handle stdout messages
		jammerScript.stdout.on(
			'data', function(data) {
				output = '';
				output += data;

				let log_lines = console_output.data.length;
				console_output.data.push('stdout: ');
				console_output.data[log_lines] += output;
			} // function(data)
		); // jammerScript.stdout.on


		// Handle stderr messages
		jammerScript.stderr.on(
			'data', function(data) {
				output = '';
				output += data;

				let log_lines = console_output.data.length;
				console_output.data.push('stderr: ');
				console_output.data[log_lines] += output;
			} // function(data)
		); // jammerScript.stdout.on
	}, // startJammer: ()

	// End jamming attack
	stopJammer: () => {
		// Check the running flag
		if (!isRunning)
			return;

		// Set the running flag to false
		isRunning = false;

		// Kill process
		jammerScript.kill();
	}, // stopJammer: ()

	getJammingLog: () => {
		// Check the running flag
		if (!isRunning)
			return 'attack_not_in_progress';

		return console_output;
	} // getJammingLog: ()

}; // module.exports
