import React, { Component } from 'react'
import { connect } from 'react-redux'
 
import { getCurrentUser } from "./actions/auth.js"

import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import CurrentUserNavbar from './components/CurrentUserNavbar'
import NewSessionNavbar from './components/NewSessionNavbar'
import Logout from './components/Logout'
import Profile from './components/Profile'

import './stylesheets/App.css'
import {  Route, Switch } from 'react-router-dom'

class App extends Component {		
	componentDidMount() {
		this.props.getCurrentUser()
	}

	render() {
		const { loggedIn, currentUser } = this.props
	  // console.log(currentUser)
	  return (
  		<div className="App-header">  
				{ loggedIn ? <CurrentUserNavbar /> : <NewSessionNavbar />}
				
	   		
   			<h1 className="App-title">Mourning</h1>
	  
				<Switch>		
 					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Logout} />	
					<Route exact path="/profile" component={Profile}/> 
					<Route exact path="/home"  component={Home} />	
					<Route exact path="/"  component={Home} />	
				</Switch>

		  </div>	
	  )
	}
}

const mapStateToProps = (state) => {
	return ({
		loggedIn: !!state.currentUser,
		currentUser: state.currentUser
	})
}
export default connect(mapStateToProps, { getCurrentUser })(App);

