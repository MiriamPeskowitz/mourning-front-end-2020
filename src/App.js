import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Mourners from './components/Mourners'
import Entries from './components/Entries'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import './stylesheets/App.css'
import {  Route, Switch, Redirect } from 'react-router-dom'
// import history from '../history'

class App extends Component {
	
	render() {
	  return (
  		<div className="App-header">    
     		<h1 className="App-title">Mourning</h1>
		  	
		  		<Navbar />
		  		<Entries />
		  		<Mourners />
		
		  
					<Switch>
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/logout"  />	
						<Redirect to="/" />
						// <Route exact path="/" component={App} />
					</Switch>
		  </div>	
	  )
	}
}

// <Router history={history}>
// <header className="App-header">	
export default App
 

