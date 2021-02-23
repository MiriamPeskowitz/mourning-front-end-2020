import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
	a {
			color: black;
		}
`
const CreateEntryButton = () => (
	<Styles>
		<Button variant="light">
			<Link to="entries/new">Create a new entry </Link>
		</Button>
		</Styles>
)
export default CreateEntryButton