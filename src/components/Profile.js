import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import DescriptionCard from './DescriptionCard'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
//withRouter might be extra, since Profile is child of Router in App.js 
const Profile = ({ currentUser, history}) => {
	return (
		<>
			<Container fluid>
				<div className="profile">
					<CurrentUserNavBar />
					<div className="description-card">
						<DescriptionCard />
					</div>

					<div className="profile-entry-cards">
						<h3>{currentUser.username}'s Entries</h3>
						<Button variant="secondary">
							<Link to="entries/new">Create a new entry </Link>
						</Button>
						<ProfileEntryCards />	
					</div>
			
					<div className="profile-memory-cards">
						<h3>Coming Soon:People I Remember</h3>
						<Button variant="secondary"><Link to="memories/new">Create a new memory card </Link></Button>
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
