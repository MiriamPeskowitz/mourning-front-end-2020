import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/auth"
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import EntryCard from './components/EntryCard'
import Profile from './components/Profile'
import CreateEntryForm from './components/CreateEntryForm'
import UpdateEntryForm from './components/UpdateEntryForm'
import Logout from './components/Logout'
import Story from './components/Story'
import ExitPage from './components/ExitPage'
import './stylesheets/App.css'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container'
import CreateMemoryForm from './components/CreateMemoryForm'
// import DescriptionCardEditForm from './components/DescriptionCardEditForm'
import DescriptionCard from './components/DescriptionCard'


class App extends Component {		
	componentDidMount() {
		this.props.getCurrentUser()
	}
	
	render() {
		const { entries } = this.props
		console.log("app component -> entries:", entries )
	  return (
	  	<div className="app">
	  		<div className="app-header">  
	  			<h1 className="app-title">Mourning</h1>	
					<Switch>		
	 					<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/logout" component={Logout} />
						<Route exact path="/profile" component={Profile} />

						<Route exact path="/entries/new" component={CreateEntryForm} />
						<Route exact path='/entries/:id' render={ (props) => {
       				const id = parseInt(props.match.params.id)
              const entry = entries.find(entry => entry.id === id)
              return (<EntryCard entry={entry} {...props} />)
            	}}/>
						<Route exact strict path='/entries/:id/edit' render={ (props) => {
              const id = parseInt(props.match.params.id)
              const entry = entries.find(entry => entry.id === id)
              console.log("edit-route-entry:", entry)
              return (<UpdateEntryForm entry={entry} {...props} />)
	            }}/>
	          <Route exact path="/memories/new" component={CreateMemoryForm} />
						<Route exact path="/story" component={Story} />
						<Route exact path="/exit"  component={ExitPage} />
						<Route exact path="/" component={Home} />	
					</Switch>
			  </div>		
			</div>
	  )
	}
}


const mapStateToProps = (state) => {
	return ({
		entries: state.authReducer.currentUser.entries,
	})
}
export default connect(mapStateToProps, { getCurrentUser })(App);

						// <Route exact strict path="/description/edit" component={DescriptionCardEditForm} />
