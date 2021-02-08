import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import { Link, withRouter } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'

const Profile = ({ currentUser, history}) => {
	return (
		<>
			<Container fluid>
				<div className="profile">
					<CurrentUserNavBar currentUser={currentUser} />
				
						<div className="profile-entry-cards">
							<h3>My Entries</h3>
								<Button variant="secondary"><Link to="entries/new">Create a new entry </Link></Button>
					
								<ProfileEntryCards />
					
						</div>
				
					<div className="profile-memory-cards">
						<h3>People I Remember</h3>
						<Button variant="secondary"><Link to="memories/new">Create a new memory card </Link></Button>
						<MemoryCards />	
					</div>
				</div>
			</Container>
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
