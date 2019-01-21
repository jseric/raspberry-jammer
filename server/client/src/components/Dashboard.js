// File name: Dashboard.js
// Description: Attack page component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';

import CodeBlock from './CodeBlock';

import './styles/Dashboard.css';

// Dashboard component
class Dashboard extends Component {
	constructor() {
		super();

		this.startAttack = this.startAttack.bind(this);
		this.stopAttack  = this.stopAttack.bind(this);

		this.state = {
			isAttackRunning: false
		};
	} // constructor()

	renderStartButton() {
		if (this.state.isAttackRunning) // Attack is running
			return (
				<Button href="#"
								className="dashboard-button dashboard-button-off"
								onClick={ this.startAttack } >
					START
				</Button>
			); // return

		// Attack is not running
		return (
			<Button bsStyle="success"
							href="#"
							className="dashboard-button"
							onClick={ this.startAttack } >
				START
			</Button>
		); // return
	} // renderStartButton()

	renderStopButton() {
		if (this.state.isAttackRunning) // Attack is running
			return (
				<Button bsStyle="danger"
								href="#"
								className="dashboard-button"
								onClick={ this.stopAttack } >
					STOP
				</Button>
			); // return

		// Attack is not running
		return (
			<Button href="#"
							className="dashboard-button dashboard-button-off"
							onClick={ this.stopAttack } >
				STOP
			</Button>
		); // return
	} // renderStopButton()

	async startAttack() {
		if (this.state.isAttackRunning) {
			console.log("client_warning:attack_already_in_progress");
			return;
		}

		this.setState({
			isAttackRunning: true
		});

		let res;
		await axios.get('/api/jammer/start')
    	.then(response => res = response.data);

		if (res === 'attack_not_in_progress')
			console.log('server_warning:attack_already_in_progress');
		else if (res === 'jamming_started')
			console.log('jamming_started');
		else
			console.log('error:unknown_response');
	} // startAttack()

	async stopAttack() {
		if (!this.state.isAttackRunning) {
			console.log('client_warning:attack_not_in_progress');
			return;
		}

		this.setState({
			isAttackRunning: false
		});

		let res;
		await axios.get('/api/jammer/stop')
    	.then(response => res = response.data);

		if (res === 'warning__attack_not_in_progress')
			console.log('server_warning:attack_not_in_progress');
		else if (res === 'jamming_stopped')
			console.log('jamming_stopped');
		else
			console.log('error:unknown_response');
	} // stopAttack()

  render() {
		return (
			<div>
        <Jumbotron>
          <h1>Attack menu</h1>

          <p>
            To start the attack, press the 'START' button.
          </p>

          <p>
            To end the attack, press the 'STOP' button.
          </p>

					<p>
            { this.renderStartButton() }
            { this.renderStopButton()  }
          </p>

          <CodeBlock isAttackRunning={this.state.isAttackRunning}/>

          <img src="./img/home_hacker.jpg" alt="Hacker" className="img-class" />
        </Jumbotron>
      </div>
		); // return
	} // render()
} // class Dashboard extends Component

// Export Dashboard component
export default Dashboard;
