// File name: CodeBlock.js
// Description: Code block component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import axios from 'axios';

import './styles/CodeBlock.css';

const console_log_fetch_interval = 5000; // 5 seconds

// CodeBlock component
class CodeBlock extends Component {
	constructor() {
		super();

		this.state = {
			console_output: [
				"No data yet"
			]
		};
	}

	componentDidMount() {
  	this.interval = setInterval(
			() => {
				this.getConsoleLog()
			},
			console_log_fetch_interval);
  } // componentDidMount()

	componentWillUnmount() {
	  clearInterval(this.interval);
	} // componentWillUnmount()

	async getConsoleLog() {
		await axios.get('/api/jammer/get_data')
    	.then(response =>
				this.setState({
					console_output: response.data.data
				})
			);
	} // async getConsoleLog()

  getData() {
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
