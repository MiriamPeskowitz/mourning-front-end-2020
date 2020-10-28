import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import { connect } from 'react-redux'
// import routes from './routes'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Entries from './containers/Entries'
import Mourners from './containers/Mourners'
import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Profile from './components/Profile'

const App = () => {
  return (
  	<Router>
	    <div className="App">
	    	<h1>Hello World </h1>
		    <Navbar />
		    
			<div> 
				<Switch>
					<Route exact path="/story" component={Story} />
					<Route exact path="/entries" component={Entries} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="profile" component={Profile} />
					<Route exact path="/" component={App} />
				</Switch>
			</div>
	   </div>
    </Router>
      )
}

export default App














