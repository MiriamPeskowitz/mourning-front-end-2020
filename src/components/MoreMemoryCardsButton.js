import React from 'react'
import { Link } from 'react-router-dom'
import { Button}  from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
	a { color: black;}
	Button {margin-bottom: 15px;}
`
const MoreMemoryCardsButton = () => (
	<Styles>
		<Button variant="light">
			<Link className="margin-bottom" to="memories/new">In Process: Create a memory card for each person you've lost and want to remember. </Link>
		</Button>

	</Styles>
)
export default MoreMemoryCardsButton