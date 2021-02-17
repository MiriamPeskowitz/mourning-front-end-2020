import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MemoryCards = () => {
	return (
		<div className="memory-cards">
			<p>Coming Soon, Memory cards for each person a user has lost and is remembering</p>
			
			<Card style={{ width: '18rem', }}>
			  <Card.Img variant="top" src="holder.js/100px180" />
			  <Card.Body style={{ color: "black"}}>
			    <Card.Title>My grandma Roz</Card.Title>
			    <Card.Text>
			      years lived-died
			    </Card.Text>
			    <Card.Text>
			      Something about her
			    </Card.Text>
			    <Button variant="primary">Edit</Button>
			  </Card.Body>
			</Card>
			<Card style={{ width: '18rem', }}>
			  <Card.Img variant="top" src="holder.js/100px180" />
			  <Card.Body style={{ color: "black"}}>
			    <Card.Title>My grandfather Morris</Card.Title>
			    <Card.Text>
			      years lived-died
			    </Card.Text>
			    <Card.Text>
			      Something about him
			    </Card.Text>
			    <Button variant="primary">Edit</Button>
			  </Card.Body>
			</Card>
		</div>
		)
}
export default MemoryCards

// Can also add card groupsCard.Group. https://react-bootstrap.github.io/components/cards/
