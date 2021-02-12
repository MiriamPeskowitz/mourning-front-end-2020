import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DescriptionCard = ({description}) => {
		
		return (
			<>
				<h3>What brought you here? Whom have you lost?</h3>
				<p>{description} </p>
				<Button variant="secondary">
					<Link to="description/edit">Coming soon:Edit your description </Link>
				</Button>
				<br/>
				<br/>
			</>
		)
}

// <Link to={'/description/edit'}>Edit Description</Link> </p> 
const mapStateToProps = state => {
	return ({
		description: state.authReducer.currentUser.description
	})
}
	
export default connect(mapStateToProps, null )(DescriptionCard)