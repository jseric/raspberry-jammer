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

	startAttack() {
		if (this.state.isAttackRunning) {
			console.log("Already running");
			return;
		}

		this.setState({
			isAttackRunning: true
		});

		let res;
		axios.get('/api/jammer/start')
    	.then(response => res = response);

		console.log("Started");
	} // startAttack()

	stopAttack() {
		if (!this.state.isAttackRunning) {
			console.log("Not running");
			return;
		}

		this.setState({
			isAttackRunning: false
		});

		let res;
		axios.get('/api/jammer/stop')
    	.then(response => res = response);
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
            <Button bsStyle="success"
                    href="#"
                    className="dashboard-button"
										onClick={ this.startAttack } >
              START
            </Button>

            <Button bsStyle="danger"
                    href="#"
                    className="dashboard-button"
										onClick={ this.stopAttack } >
              STOP
            </Button>
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
