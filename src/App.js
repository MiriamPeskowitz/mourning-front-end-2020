import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/auth.js"

import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import CurrentUserNavbar from './components/CurrentUserNavbar'
import NewSessionNavbar from './components/NewSessionNavbar'
import EntryCard from './components/EntryCard'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Story from './components/Story'

import './stylesheets/App.css'
import {  Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {		
	componentDidMount() {
		this.props.getCurrentUser()
	}
			
	render() {
			const { loggedIn, currentUser, entries } = this.props
			// const entries = currentUser.entries
			console.log("In App.js- entries:", entries)	
			// console.log("eee:", eee)
	  return (
  		<div className="App-header">  
  			<h1 className="App-title">Mourning</h1>

  			{ loggedIn ? <CurrentUserNavbar currentUser={currentUser} /> : <NewSessionNavbar /> } 			
  
				<Switch>		
 					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout" component={Logout} />	
					<Route exact path="/profile" component={Profile} /> 
					<Route exact path='/entry/:id' render={ ( props) => {
						console.log("data passed in render: " , props)
						const entry = entries.find(entry=> entry.id === props.match.params.id)
						// id in params.match is a string 
						console.log("entry in Route/App : ", entry)
						return (<EntryCard entry={entry} {...props} />)
						}
					}/>
					<Route exact path="/story" component={Story} />
					<Route exact path="/"  component={Home} />	
				</Switch>
		  </div>	
	  )
	}
}

const mapStateToProps = (state) => {
	return ({
		loggedIn: !!state.authReducer.currentUser,
		currentUser: state.authReducer.currentUser,
		entries: state.authReducer.currentUser.entries
	})
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
  		
// <Route exact path='/entry/:id' render={ ( props) => {
					// 	console.log(props)
					// 	const entry = entries.find(ent=> ent.id === props.match.params.id)
					// 	// id in params.match is a string 
					// 	console.log("entry in ROute/App: ", entry)
					// 	return (<EntryCard entry={entry} {...props} />)
					// 		}
					// 	} />

  			// { loggedIn ? <p>LOGGEDIN</p> : <p>NOT LOGGED IN</p> }

//delete one of the home paths 
