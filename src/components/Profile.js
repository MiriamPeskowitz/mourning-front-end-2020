import React  from 'react'
import { connect } from 'react-redux'
import MemoryCard from './MemoryCard'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import { Link, withRouter } from 'react-router-dom'

const Profile = ({ currentUser, history}) => {
	return (
		<>
			<div className="profile">
				<CurrentUserNavBar currentUser={currentUser} />
				<h2>{currentUser.username}'s page</h2>
				<div className="profile-entry-cards">
					<p><Link to="entries/new" >Create a new entry </Link></p>
					<ProfileEntryCards />
				</div>
				<MemoryCard />	
			</div>
		</>
	)
}
		
const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
