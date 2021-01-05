import React, { Component } from 'react'
import { connect } from 'react-redux'

import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import Profile from './components/Profile'

import './stylesheets/App.css'
import {  Route, Switch } from 'react-router-dom'

class App extends Component {		

	render() {

	  return (
  		<div className="App-header">  

  			
   			<Navbar />
  		
   		
   			<h1 className="App-title">Mourning</h1>
	  
				<Switch>		
 					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Logout} />	
					<Route exact path="/profile" component={Profile}/> 
					<Route path={["/", "/home"]}  component={Home} />	
				</Switch>
		  </div>	
	  )
	}
}

const mapStateToProps = (state) => {

  return { 
  	currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null )(App);
