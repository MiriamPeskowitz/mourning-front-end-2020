import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import Entries from './containers/Entries'
import SignUp from './containers/SignUp.js'
import Login from './containers/Login.js'
import Profile from './components/Profile.js'
import Home from './components/Home.js'
import Story from './components/Story.js'
// import './css/App.css';

class App extends Component {
	
	render() {
	  return (
	  
	    <div className="App">
	      <Navbar />
	    	<Switch>
	    		<Route exact path="/story" component={Story} />
	    		<Route exact path="/entries" component={Entries} />
	    		<Route exact path="/signUp" component={SignUp} />
	    		<Route exact path="/login" component={Login} />
	    		<Route exact path="/users/:id" component={Profile} />
	    		<Route exact path="/" component={Home} />
	    	</Switch>

	    	// <Mourners />
	    	// <Entries />
	    
	    </div>
	  )
	}
}

export default App

	// <Navbar>SignUp LogIn Profile Main</Navbar>















