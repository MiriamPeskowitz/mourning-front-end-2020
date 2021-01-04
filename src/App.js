import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import Profile from './components/Profile'
import { getCurrentUser } from './actions/auth'

import './stylesheets/App.css'
import {  Route, Switch } from 'react-router-dom'
// import history from '../history'

class App extends Component {
	render() {

	  return (
  		<div className="App-header">   

  			
   			<Navbar />
  		
   		
   			<h1 className="App-title">Mourning</h1>
	  
				<Switch>		
 					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />	
					<Route path="/profile" component={Profile}/> 
					<Route path="/" component={Home} />	
				</Switch>
		  </div>	
	  )
	}
}

const mapStateToProps = (state) => {
 console.log("currentUser: ", state.currentUser)
  return { 
  	currentUser: state.currentUser 
  };
}

export default connect(mapStateToProps, null  )(App);
