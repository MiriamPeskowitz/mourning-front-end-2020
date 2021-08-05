import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import DescriptionCard from './DescriptionCard'
import CapitalizeName from './CapitalizeName'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
//withRouter might be extra, since Profile is child of Router in App.js 

const Profile = ({ currentUser, history}) => {
	return (
		<div>
			<Container fluid>
				<div className="profile">
					
					<CurrentUserNavBar />
					
					<section className="description-card">
						<DescriptionCard />
					</section>

					<section className="profile-entry-cards">
						<h3>{CapitalizeName(currentUser.username)}'s Entries</h3>
						<Button variant="secondary">
							<Link to="entries/new">Create a new entry </Link>
						</Button>
						<ProfileEntryCards />	
					</section>
					
					<br/>

					<section className="profile-memory-cards">
						<h3>Coming Soon: People I Remember</h3>
						<Button variant="secondary"><Link to="memories/new">Coming Soon: create a new memory card </Link></Button>
						<MemoryCards />	
					</section>
					
				</div>
			</Container>
		</div>
	)
}

const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
