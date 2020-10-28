import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Story from './components/Story.js'
import Entries from './containers/Entries'
import SignUp from './containers/SignUp.js'
import Login from './containers/Login.js'
import Profile from './components/Profile.js'
import App from './App'
// import Home from './components/Home.js'
import './css/App.css';

const routes = () => {
	return (
		<div className="routes">
			<Switch>
				<Route exact path="/story" component={Story} />
				<Route exact path="/entries" component={Entries} />
				<Route exact path="/signUp" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/users/:id" component={Profile} />
				<Route exact path="/" component={App} />
			</Switch>
		</div>
	)
}
export default routes