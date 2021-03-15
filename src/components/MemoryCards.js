import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MemoryCards = () => {
	return (
		<div className="memory-cards">
			<p>Create a memory card for each person you've lost and want to remember.</p>
			
			<Card style={{ width: '18rem', }}>
			  // <Card.Img variant="top" src="holder.js/100px180" />
			  <Card.Body style={{ color: "black"}}>
			    <Card.Title>My grandma Roz</Card.Title>
			    <Card.Text>
			      1915-2016
			    </Card.Text>
			    <Card.Text>
			     memories description stories reminders remembrances chronicle archive sweetness memories
			    </Card.Text>
			    <Button variant="primary">Edit</Button>
			  </Card.Body>
			</Card>
			<Card style={{ width: '18rem', }}>
			  // <Card.Img variant="top" src="holder.js/100px180" />
			  <Card.Body style={{ color: "black"}}>
			    <Card.Title>My grandfather Morris</Card.Title>
			    <Card.Text>
			      1900-1993
			    </Card.Text>
			    <Card.Text>
			     memories description stories reminders remembrances chronicle archive sweetness memories

			    </Card.Text>
			    <Button variant="primary">Edit</Button>
			  </Card.Body>
			</Card>
		</div>
		)
}
export default MemoryCards

// Can also add card groupsCard.Group. https://react-bootstrap.github.io/components/cards/
