// File name: Footer.js
// Description: Footer component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';

import './styles/Footer.css';

// Footer component
class Footer extends Component {
  render() {
    return (
      <div className="footer-div" >
        <p>
          Made with ❤️ and ReactJS by Josip Šerić & Joško Zorić in 2019
        </p>
      </div>
    ); // return
  } // render()
} // class Footer extends Component

// Export Footer component
export default Footer;
