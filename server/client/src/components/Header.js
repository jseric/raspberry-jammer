// File name: Header.js
// Description: Header component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';
import { Navbar, NavItem }  from 'react-materialize';

// Import stylesheet
import './styles/Header.css';

// Header component
class Header extends Component {
	render() {
		return (
			<div>
        <Navbar className="header-container" brand='RPI Jammer' right >
          <NavItem href='/' >
            Home
          </NavItem>

          <NavItem href='/dashboard' >
            Dashboard
          </NavItem>

        </Navbar>
			</div>
		); // return
	} // render()
} // class Header extends Component


// Export Header component
export default Header;
