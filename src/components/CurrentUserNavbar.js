import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}
	a, .navbar-brand, .navbar-nav, .nav-link {
		color: #EEE9E8;

		&:hover {
			color: white;
		}
	}
`;

const CurrentUserNavbar = ( {currentUser} ) => {
	// console.log(currentUser)
	const {username} = currentUser
	const nameCapitalized = (username) => {
		const nameCap = username.charAt(0).toUpperCase() + username.slice(1)
		console.log(nameCap)
		return nameCap
		}
		return (
		<Styles>
			<Navbar bg="transparent" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand className="font-weight-bold text-muted" href="/">Mourning</Navbar.Brand>
					<span className="navbar-text">Welcome back, {nameCapitalized(username)}</span>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<LinkContainer exact to="/">	
									<Nav.Link>Home</Nav.Link>
								</LinkContainer>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer exact to="/story">	
									<Nav.Link>About</Nav.Link>
								</LinkContainer>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer exact to="/profile">	
									<Nav.Link>My Profile</Nav.Link>
								</LinkContainer>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer exact to="/logout">	
									<Nav.Link>Logout</Nav.Link>
								</LinkContainer>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>	
				</Container>			
			</Navbar>
		 </Styles>
		 )
	}
const mapStateToProps = state => {
	return {
		currentUser: state.authReducer.currentUser
	}
}

export default connect(mapStateToProps, null)(CurrentUserNavbar)
