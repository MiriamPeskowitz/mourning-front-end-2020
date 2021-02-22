import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

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
							<LinkContainer exact to="/signup">	
								<Nav.Link>Signup</Nav.Link>
							</LinkContainer>
						</Nav.Item>
						<Nav.Item>
							<LinkContainer exact to="/login">	
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>	
					</Container>			
			</Navbar>

		</Styles>
	)

export default NewSessionNavbar

