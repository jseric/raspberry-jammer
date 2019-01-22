// File name: CodeBlock.js
// Description: Code block component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import axios from 'axios';

// Import stylesheet
import './styles/CodeBlock.css';

// Interval for fetching console log
const console_log_fetch_interval = 5000; // 5 seconds

// CodeBlock component
class CodeBlock extends Component {
	constructor() {
		super();

		// Set initial state
		this.state = {
			console_output: [
				"No data yet"
			]
		};
	}

	componentDidMount() {
		// Set getConsoleLog() to be called every console_log_fetch_interval ms
  	this.interval = setInterval(
			() => {
				this.getConsoleLog()
			},
			console_log_fetch_interval
		); // this.interval = setInterval
  } // componentDidMount()

	componentWillUnmount() {
	  clearInterval(this.interval);
	} // componentWillUnmount()

	async getConsoleLog() {
		// Check if attack is alredy running
		if (!this.props.isAttackRunning)
			return;

		let res;

		// Send GET request to /api/jammer/get_data
		await axios.get('/api/jammer/get_data')
    	.then(response => res = response.data );

		if (res === 'warning__attack_not_in_progress')
			return;

		// Change state
		this.setState({
			console_output: res.data
		});
	} // async getConsoleLog()

  getData() {
		// Check if attack is running
		if (!this.props.isAttackRunning)
			return;
			
    return (
      <div>
        { this.state.console_output.map(function(line, index) {
        		return (
							<div className="console-output-inner-container"
									 key={ index }>
								<code className="console-output-codetag" >
								  { line }
							  </code>
						 		<br>
								</br>
							</div>);
	      }) }
      </div>
    ); // return
  } // getData()

  render() {
    return (
      <div className="console-output-outer-container" >
        { this.getData() }
      </div>
    ); // return
  } // render()
} // class CodeBlock extends Component

// Export CodeBlock component
export default CodeBlock;
