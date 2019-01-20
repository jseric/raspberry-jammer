// File name: Dashboard.js
// Description: Attack page component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './styles/Dashboard.css';

let console_output = [
  '#include <stdio.h>',
  '#include <stdlib.h>',
  'int main(void)',
  '{',
  '  int a = 0;',
  '  int b = 0;',
  '  printf("Hello world\n");',
  '  return 0;',
  '}'
];

// Dashboard component
class Dashboard extends Component {

  getConsoleLog() {
		// TODO

    return (
      <div className="console-output-outer-container" >
        { console_output.map(function(line, index){
	        return (
						<div className="console-output-inner-container" >
							<code className="console-output-codetag" >
							 { line }
						 </code>
					 		<br>
							</br>
						</div>);
	      	}) }
      </div>
    ); // return
  } // getConsoleLog()

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

          { this.getConsoleLog() }

          <img src="./img/home_hacker.jpg" alt="Hacker" className="img-class" />
        </Jumbotron>
      </div>
		); // return
	} // render()
} // class Dashboard extends Component

// Export Dashboard component
export default Dashboard;
