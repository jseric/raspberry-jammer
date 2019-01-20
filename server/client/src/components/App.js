// File name: App.js
// Description: Main (App) component
// Date created: 19th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } 	  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home	  from './Home';
const Dashboard = () => <h1>Dashboard</h1>;

// App component
class App extends Component {
  render() {
    return (
      <div className="container">
				<BrowserRouter>
					<div>
						<Header />

						<Route exact path="/"
	                 component ={ Home } />

						<Route path="/dashboard"
									 component={ Dashboard } />

						<Footer />
					</div>

				</BrowserRouter>

      </div>
    ); // return
  } // render()
} // class App extends Component

// Export App component
export default App;
