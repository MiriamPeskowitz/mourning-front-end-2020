import React  from 'react'
import { connect } from 'react-redux'
import MemoryCards from './MemoryCards'
import ProfileEntryCards from './ProfileEntryCards'
import CurrentUserNavBar from './CurrentUserNavbar'
import DescriptionCard from './DescriptionCard'
import CreateEntryButton  from './CreateEntryButton'
import MoreMemoryCardsButton  from './MoreMemoryCardsButton'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const Profile = ({ currentUser, history}) => {
	const { username } = currentUser
	const nameCapitalized = username.charAt(0).toUpperCase() + username.slice(1)
	// console.log("nameCapitalized:", nameCapitalized)
	return (
		<>
			<Container fluid>
				<div className="profile">
					<CurrentUserNavBar />
					<section>
						<h3>Whom have you lost?</h3>
						<DescriptionCard />
					</section>			

					<section className="profile-entry-cards">
						<h3>{nameCapitalized}'s Entries</h3>
						<CreateEntryButton />
						<ProfileEntryCards />	
					</section>
			
					<section className="profile-memory-cards">
						<h3>People I Remember</h3>
						<div>
						<MoreMemoryCardsButton />
						</div>
						<MemoryCards />	
					</section>
					
				</div>
			</Container>
		</>
	)
}

//refactor 
const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		
		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));
