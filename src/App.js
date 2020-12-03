import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Mourners from './components/Mourners'
import Entries from './components/Entries'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import './stylesheets/App.css'
import {  Route, NavLink, Switch } from 'react-router-dom'
// import history from '../history'

class App extends Component {
	
	render() {
	  return (

	  		<div className="App">
          <header className="App-header">	
			  		<Navbar />
			  	</header>

			  	<Entries />
			  	<Mourners />		
			  </div>	

	  )
	}
}


const Main = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signout"  />
		 	
				</Switch>
		</>
	)
}
// <Router history={history}>

export default App
 

