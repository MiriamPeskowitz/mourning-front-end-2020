import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/auth"
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import EntryCard from './components/EntryCard'
import Profile from './components/Profile'
import CreateEntryForm from './components/CreateEntryForm'
import EditEntryForm from './components/EditEntryForm'
import Logout from './components/Logout'
import Story from './components/Story'
import ExitPage from './components/ExitPage'
import './stylesheets/App.css'
import { Route, Switch } from 'react-router-dom'

class App extends Component {		
	componentDidMount() {
		console.log("got to componentDidMount")
		this.props.getCurrentUser()
	}
	
	render() {
		const { currentUser, entries } = this.props
		console.log("app, entries:", entries )
	  return (

	  	<>
	  		<div className="App-header">  
	  			<h1 className="App-title">Mourning</h1>
	  	
					<Switch>		
	 					<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/logout" component={Logout} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/entries/new" component={CreateEntryForm} />
						
						<Route path='/entries/:id' render={ (props) => {
       			console.log("props:", props)
       			console.log("entries:", entries)
       			console.log("match params id:", props.match.params.id)
              const entry = entries.find(entry => entry.id === props.match.params.id)
              console.log(entry)
              return (<EntryCard entry={entry} match={this.props.match} />)
            	}}/>
						<Route exact path='/entries/:id/edit' render={ props => {
	              const entry = props.entries.find(entry => entry.id === props.match.params.id)
	              return (<EditEntryForm entry={entry} {...props} />)
	            }}/>
						<Route exact path="/story" component={Story} />
						<Route exact path="/exit"  component={ExitPage} />
						<Route exact path="/" component={Home} />	
					</Switch>
			  </div>	
		  </>
	  )
	}
}

const mapStateToProps = (state) => {
	return ({
		loggedIn: !!state.authReducer.currentUser,
		currentUser: state.authReducer.currentUser,
		entries: state.authReducer.currentUser.entries,
	})
}
export default connect(mapStateToProps, { getCurrentUser })(App);

