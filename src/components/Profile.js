import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
//withRouter might be extra, since Profile is child of Router in App.js 
const Profile = ({ currentUser, history}) => {
	return (
		<>
			<Container fluid>
				<div className="profile">
					<CurrentUserNavBar />
				
					<div className="profile-entry-cards">
						<h3>{currentUser.username}'s Entries</h3>
						<Button variant="secondary">
							<Link to="entries/new">Create a new entry </Link>
						</Button>
			
						<ProfileEntryCards />	
					</div>
			
				<div className="profile-memory-cards">
						<h3>People I Remember</h3>
						<Button variant="secondary"><Link to="memories/new">Coming Soon: create a new memory card </Link></Button>
						<MemoryCards />	
					</div>
				</div>
			</Container>
		</>
	)
}
					// <h2>{currentUser.username}'s page</h2>
						// <CurrentUserNavBar currentUser={currentUser} />

const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
