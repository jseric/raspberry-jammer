// File name: Dashboard.js
// Description: Attack page component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import CodeBlock from './CodeBlock';

import './styles/Dashboard.css';



// Dashboard component
class Dashboard extends Component {
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
                    className="dashboard-button" >
              START
            </Button>

            <Button bsStyle="danger"
                    href="#"
                    className="dashboard-button" >
              STOP
            </Button>
          </p>

          <CodeBlock />

          <img src="./img/home_hacker.jpg" alt="Hacker" className="img-class" />
        </Jumbotron>
      </div>
		); // return
	} // render()
} // class Dashboard extends Component

// Export Dashboard component
export default Dashboard;
