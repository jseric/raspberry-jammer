// File name: attack_handlers/jammerHandler.js
// Description: Jammer functionality handler
// Date created: 14th January 2018
// Author: Josip Seric

// Import modules
const spawn = require('child_process').spawn;

// Dummy data
let console_output = {
	"data" : [
		"#include <stdio.h>",
		"#include <stdlib.h>",
		"int main(void)",
		"{",
		"  int a = 0;",
		"  int b = 0;",
		"  printf(\"Hello world\n\");",
		"  return 0;",
		"}"
	]
};

let isRunning = false;
var jammerScript;

const jammerScriptPath 	  = 'wifijammer';
const jammerScriptOptions = {};

module.exports = {

	// Check if an attack is running
	isAttackOn: () => {
		return isRunning;
	}, // isAttackOn: ()

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
	}, // stopJammer: ()

	getJammingLog: () => {
		/*if (!isRunning)
			return;*/

		return console_output;

		// TODO
	} // getJammingLog: ()

}; // module.exports
