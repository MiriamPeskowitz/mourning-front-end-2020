import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import Entries from './containers/Entries'

// import './css/App.css';

class App extends Component {
	
	render() {
	  return (
	    <div className="App">
	    	<Navbar />
	    	<Mourners />
	    	<Entries />
	    
	    </div>
	  )
	}
}

export default App

	// <Navbar>SignUp LogIn Profile Main</Navbar>
