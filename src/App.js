import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Mourners from './components/Mourners'
import Entries from './components/Entries'
import Navbar from './components/Navbar'
import './stylesheets/App.css'
import { Route, NavLink, Switch,  Router } from 'react-router-dom'
// import history from '../history'

class App extends Component {
	
	render() {
	  return (
	  	<>
	  		
			  	<Navbar />
			  	<Entries />
			  	<Mourners />
			
		  </>
	  )
	}
}

//move to routing file and import 
// const Main = () => {
// 	return (
// 		<>
// 			<Switch>
// 				<Route exact path="/" component={App} />
// 				<Route exact path="/login" component={Login} />
// 				<Route exact path="/signup" component={Signup} />
// 				<Route exact path="/signout"  />
// 		 	
				// </Switch>
// 		</>
// 	)
// }
// <Router history={history}>

export default App
 

