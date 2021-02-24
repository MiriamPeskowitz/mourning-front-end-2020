import React from 'react'
import { Link } from 'react-router-dom'
import { Button}  from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
	a {
			color: black;
		}
`
const MoreMemoryCardsButton = () => (
	<Styles>
		<Button variant="light">
			<Link to="memories/new">Coming Soon: create a new memory card </Link>
		</Button>
	</Styles>
)
export default MoreMemoryCardsButton