import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import DescriptionCard from './DescriptionCard'
import CreateEntryButton  from './CreateEntryButton'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'



const Profile = ({ currentUser, history}) => {
	return (
		<>
			<Container fluid>
				<div className="profile">
					<CurrentUserNavBar />

					<h3>Who have you lost?</h3>

					<DescriptionCard />
			

					<div className="profile-entry-cards">
						<h3>{currentUser.username}'s Entries</h3>
						<CreateEntryButton />
						<ProfileEntryCards />	
					</div>
			
					<div className="profile-memory-cards">
						<h3>Coming Soon: People I Remember</h3>
						<Button variant="light"><Link to="memories/new">Coming Soon: create a new memory card </Link></Button>
						<MemoryCards />	
					</div>
					
				</div>
			</Container>
		</>
	)
}

const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
