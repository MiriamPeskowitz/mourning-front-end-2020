import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import { Link, withRouter } from 'react-router-dom'

const Profile = ({ currentUser, history}) => {
	return (
		<>
			<div className="profile">
				<CurrentUserNavBar currentUser={currentUser} />
				
				<div className="profile-entry-cards">
					<h3>My Entries</h3>
					<p><Link to="entries/new" >Create a new entry </Link></p>
					<ProfileEntryCards />
				</div>
				<div className="profile-memory-cards">
					<h3>People I Remember</h3>
					<p><Link to="memory/new" >Create a new memory card </Link></p>
					<MemoryCards />	
				</div>
			</div>
		</>
	)
}
					// <h2>{currentUser.username}'s page</h2>
	
const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
