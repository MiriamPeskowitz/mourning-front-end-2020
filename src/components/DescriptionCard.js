import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

//add card 
const Styles = styled.div`
	
	a {
		color: black;
	}
`

const DescriptionCard = ({description}) => {
		
		return (
			<Styles>
				<Card className="description-card">
				  <Card.Body >
				    <Card.Text>
				      {description}
				    </Card.Text>
				    <Button variant="light">
				    	<Link to="description/edit">Coming soon:Edit your description </Link>
				    </Button>
				  </Card.Body>
				</Card>
			</Styles>
		)
}

			

// <Link to={'/description/edit'}>Edit Description</Link> </p> 
const mapStateToProps = state => {
	return ({
		description: state.authReducer.currentUser.description
	})
}
	
export default connect(mapStateToProps, null )(DescriptionCard)
// style={{ color: "black"}}
// <div className="description-card">
// 				<p>{description} </p>
// 				<Button  variant="primary" size="sm">
// 					<Link to="description/edit">Coming soon:Edit your description </Link>
// 				</Button>
// 			</div>