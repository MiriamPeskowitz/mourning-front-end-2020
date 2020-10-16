import React, { Component } from 'react'
import { connect } from 'react-redux'
import getUsers from '../actions/users'
import MournersList from '../components/MournersList'

const red = { color: '#cd5c5c'}

class Mourners extends Component {

	componentDidMount(){
		this.props.getUsers()
		console.log("ComponentDidMount/Users")
	}

	render() {		
		return (
			<div className="mourner-list">
			 <h2 style={red}>Who is here mourning their dead?</h2>
			  <div>
			  {this.props.loading ? <h3>Loading...</h3> : <MournersList users={this.props.users} /> }
			  </div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		users: state.userReducer.users,
		loading: state.userReducer.loading
	}
}

export default connect(mapStateToProps, {getUsers} )(Mourners)
// state -- names 
//semantic-ui-react -- make a card around this, or a section. 


// state = {
	// 	users: '',
	// 	loading: false
	// }