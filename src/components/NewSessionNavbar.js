import React from 'react'
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

const NewSessionNavbar = () => (	
	<Styles>
		<Navbar bg="transparent" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="/">Mourning</Navbar.Brand>
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
								<NavLink  exact to="/signup">SignUp</NavLink>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link> 
								<NavLink exact to="/login">Login</NavLink>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>	
					</Container>			
			</Navbar>

		</Styles>
	)

export default NewSessionNavbar

