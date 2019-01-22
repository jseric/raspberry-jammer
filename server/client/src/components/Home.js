// File name: Home.js
// Description: Home page component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// Import stylesheet
import './styles/Home.css';

// Home component
class Home extends Component {
	render() {
		return (
			<div>
        <Jumbotron>
          <h1>Raspberry PI WiFi Attacker!</h1>

          <p>
            Use this web application to attack nearby WiFi networks!
          </p>

          <img src="./img/home_hacker.jpg" alt="Hacker" className="img-class" />

          <p>
            <Button bsStyle="primary" href="/dashboard" >Go to attack menu</Button>
          </p>
        </Jumbotron>
      </div>
		); // return
	} // render()
} // class Home extends Component

// Export Home component
export default Home;
