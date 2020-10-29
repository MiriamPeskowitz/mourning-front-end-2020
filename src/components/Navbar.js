import React from 'react'
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
// import routes from '../routes'
import Story from './Story'
// import Entries from '../containers/Entries'
// import Mourners from '../containers/Mourners'
import SignUp from '../containers/SignUp'
// import Login from '../containers/Login'
// import Profile from './Profile'
// import App from '../App'
import '../css/App.css';

// const link = {
//   width: '100px',
//   padding: '0px',
//   margin: '2px 2px 2px',
//   textDecoration: 'none',
//   color: 'white'
//  }

// const liststyle = {
//     listStyle: 'none'
//   }

const Navbar = (props) => {
	return (
		<div>
			<SignUp />
			<Story />
		</div>			
	)
}

 export default Navbar
// <Mourners />
// 			<Entries />
// 			<SignUp />
// 			<Login />

// <Router>
// 		<div className="navbar">
// 			<ul style={ liststyle }>
// 				<li><NavLink to='/' exact style={ link } activeStyle={{ background: 'royalBlue'}}>Mourning</NavLink></li>

// 				<li><NavLink to='/signUp' exact style={ link } activeStyle={{ background: '#e69500' }}>Join</NavLink></li>

// 				<li><NavLink to='/Login' exact style={ link } activeStyle={{ background: '#e69500' }}>Login</NavLink></li>

// 				<li><NavLink to='/Story' exact style={ link } activeStyle={{ background: 'violet' }}>Story</NavLink></li>

// 				<li><NavLink to='/users/:id' exact style={  link } activeStyle={{ background: '#cd5c5c' }}>Profile</NavLink></li>
// 			</ul>
	
// 			<div className="container mt-3">
// 				<Switch>
// 					<Route exact path="/story" component={Story} />
// 					<Route exact path="/entries" component={Entries} />
// 					<Route exact path="/signup" component={SignUp} />
// 					<Route exact path="/login" component={Login} />
// 					<Route exact path="profile" component={Profile} />
// 					<Route exact path="/" component={App} />
// 				</Switch>
// 				</div>
// 			</div>
// 	</Router>	
