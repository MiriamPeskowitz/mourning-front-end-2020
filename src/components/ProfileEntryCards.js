import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
import '../stylesheets/App.css';
// import { Button, Container } from 'react-bootstrap'

import styled from 'styled-components'

// import Card from 'react-bootstrap/Card'

// send as props, or mapStateToProps
//went with props passed from Profile. Why? Is there an async thing that was happening with MSP? But why would this be solved with passed props? Should I delete MSP? 
//other ways to solve something like this? 
//because that hack didn't work
//now back to msp, still doesn't work coming straight from login 

const Styles = styled.div`
	.profile-entry-cards {
	 	background-color: #eee;
  	color: black;
  	margin: 2rem;
  	padding: 1rem;

		&:hover {
			color: dark-blue;
		}
	}
`;



//Why did I have withRouter? since I'm not passing history. Delete? 
const ProfileEntryCards = ( {entries} ) => {

	const ent = entries.reverse()

	const myEntryCards = ent.length > 0 ? ent.map(entry => 	<div key={entry.id} className="profile-entry-cards"> 
				<NavLink exact to={`/entries/${entry.id}`}>
					<h4>{entry.title}</h4>
					<p> {entry.content} </p>
				</NavLink>
		</div>)  : <p>No entries</p>
	
	return (	
		<>
			<Styles>
				{ myEntryCards }
			</Styles>
		</>
	)
}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)


// a, .navbar-brand, .navbar-nav, .nav-link {
// 		color: #bbb;
// 		background-color: #222;
		
// 	}
