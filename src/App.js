import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import Entries from './containers/Entries'
import Story from './components/Story'
// import SignUp from './containers/SignUp.js'
// import Login from './containers/Login.js'
// import Profile from './components/Profile.js'
// import Home from './components/Home.js'
// import Story from './components/Story.js'
// import './css/App.css';

class App extends Component {
	
	render() {
	  return (
	  
	    <div className="App">
	      <Navbar />
	    	
	    	// <Mourners />
	    	// <Entries />
	    	<Story />
	    
	    </div>
	  )
	}
}

export default App

	// <Navbar>SignUp LogIn Profile Main</Navbar>














