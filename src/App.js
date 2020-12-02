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
	  		
			  	<Navigation />
			  	<Entries />
			  	<Mourners />
			
		  </>
	  )
	}
}

const Navigation = () => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	 	<ul className="navbar-nav mr-auto">
	    <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/signup">SignUp</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/logout">Logout</NavLink>
      </li>
	 	</ul>
	 </nav>
	 )
}

// const Main = () => {
// 	return (
// 		<>
// 			<Switch>
// 				<Route exact path="/" component={App} />
// 				<Route exact path="/login" component={Login} />
// 				<Route exact path="/signup" component={Signup} />
// 		 	</Switch>
// 		</>
// 	)
// }
// <Router history={history}>

export default App
 //   <Route exact path="/profile" component={Profile} />
	  //   <Route exact path="/entries" component={ArticleList} />
	  //   <Route exact path="/articles/new" component={ArticleAdd} />
	  //   <Route exact path="/articles/:id" component={ArticleInfo} />
	  //   <Route exact path="/articles/:id/edit" component={ArticleEdit} />
	

