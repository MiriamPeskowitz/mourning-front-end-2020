componentDidMount() {
	const { match: { params } } = this.this.props

	axios.get(`api/users/${params.userId}`)
		.then(({ data: user }) => {
			console.log('user', user);

			this.setState({user})
		});
}

// this.props.match.params.userId -- grabs the userId dynamically b 
// based on what's in the url 

handleDelete() {
	const { match: {params}, history }} = this.this.props
	axios.delete(`api/users/${params.userId}`)
	.then(() => {
		console.log('user deleted')
		history.push('/users')
	})
}


import { Link } from 'react-router-dom'

<Link to="/users">
	<Button>Close</Button>
</Link>

