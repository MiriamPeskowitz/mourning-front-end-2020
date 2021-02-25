import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
	
	a {
		color: black;
	}
`

const DescriptionCard = ({description}) => {

		console.log("description:", description)


		const myDescription = description.length > 0 ? <NavLink exact to={"description/edit"}>{description}</NavLink> : <p>No Description Yet</p>
		return (
			<Styles>
				<Card className="description-card">
				  <Card.Body >
				    <Card.Text>
				      { myDescription }
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Styles>
		)
}

const mapStateToProps = state => {
	return ({
		description: state.authReducer.currentUser.description
	})
}
	
export default connect(mapStateToProps, null )(DescriptionCard)


// <Button variant="light">
// 				    	<Link to="description/edit">Coming soon:Edit your description </Link>
// 				    </Button>