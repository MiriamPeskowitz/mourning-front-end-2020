import React from 'react'
import { Switch, Route } from 'react-router-dom'

const routes = () => {

	<Switch>
		<Route exact path="/story" component={Story} />
		<Route exact path="/entries" component={Entries} />
		<Route exact path="/signUp" component={SignUp} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/users/:id" component={Profile} />
		<Route exact path="/" component={Home} />
	</Switch>
}
export default routes