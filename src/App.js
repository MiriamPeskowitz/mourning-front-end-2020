import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './stylesheets/App.css'
import {  Route, Switch, Redirect } from 'react-router-dom'
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
					<Route path="/logout"  />	
					<Route path="/" component={Home} />	
				</Switch>
		  </div>	
	  )
	}
}
export default App
//would path be add or entry/new 
// <Route exact path="/" component={App} />

// <Router history={history}>
// <header className="App-header">	

 // <Route path="/signup" component={Signup} />
	// 				<Route path="/login" component={Login} />
	// 				<Route path="/logout"  />	

