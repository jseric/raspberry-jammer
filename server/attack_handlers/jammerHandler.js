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

let console_output_lines_counter = 0;

let isRunning = true;
var jammerScript;

const jammerScriptPath 	  = 'wifijammer';
const jammerScriptOptions = {};

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

		// Start attack script
		jammerScript = spawn(
			'python',
			[
				'attackScript.py'
			],
			{
				uid: 0,
				gid: 0
			}
		);

		let output = '';
		jammerScript.stdout.on(
			'data', function(data) {
				output += data;
				console.log(output);
				console_output.data[console_output_lines_counter] = '';
    		console_output.data[console_output_lines_counter] += data;
				console_output_lines_counter++;
			} // function(data)
		); // jammerScript.stdout.on
	}, // startJammer: ()

	// End jamming attack
	stopJammer: () => {
		if (!isRunning)
			return;

		isRunning = false;
		jammerScript.kill();
	}, // stopJammer: ()

	getJammingLog: () => {
		// TODO

		/*
		if (!isRunning)
			return;
		*/

		return console_output;

		// TODO
	} // getJammingLog: ()

}; // module.exports
