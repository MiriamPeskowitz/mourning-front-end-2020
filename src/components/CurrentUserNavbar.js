import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}
	a, .navbar-brand, .navbar-nav, .nav-link {
		color: #bbb;

		&:hover {
			color: white;
		}
	}
`;

const CurrentUserNavbar = ( {currentUser} ) => {	
	console.log("CUNavbar:currentUser", currentUser)
	return(
		<div>
		<Styles>
			<Navbar bg="transparent" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand href="/">Mourning</Navbar.Brand>
					<span>Welcome back, {currentUser.username}</span>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link> 
									<NavLink exact to="/">Home</NavLink>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<NavLink exact to="/story">About</NavLink>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link> 
								<NavLink exact to="/profile">My Profile</NavLink>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link> 
									<NavLink exact to="/logout">Logout</NavLink> 
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>	
				</Container>			
			</Navbar>
		 </Styles>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		currentUser: state.authReducer.currentUser
	}
}

export default connect(mapStateToProps, null)(CurrentUserNavbar)
