import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/auth'
import Navbar from './Navbar'
import Mourners from './Mourners'
import Entries from './Entries'

const Home = ({ getCurrentUser, currentUser, loggedIn }) => {
	return (
		<div className="Home">
			<Navbar />
  		<Entries />
  		<Mourners />
	  </div>
	 )
}

const mapStateToProps = (state) => {
	return ({
		loggedIn: !!state.authReducer.currentUser,
		currentUser: state.authReducer.currentUser,
		
	})
}

export default connect(mapStateToProps, { getCurrentUser })(Home);


