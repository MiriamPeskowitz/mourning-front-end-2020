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
  			<Navbar />
     		<h1 className="App-title">Mourning</h1>
	  		<Entries />
	  		<Mourners />
	  
				<Switch>
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/logout"  />	
					<Redirect to="/" />
				</Switch>
		  </div>	
	  )
	}
}
					// <Route exact path="/" component={App} />

// <Router history={history}>
// <header className="App-header">	
export default App
 

