// state -- names 
//semantic-ui-react -- make a card around this, or a section. 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import getUsers from '../actions/users'
import MournersList from '../components/MournersList'

class Mourners extends Component {

	componentDidMount(){
		this.props.getUsers()
		console.log("ComponentDidMount")
	}

	render() {		
		return (
			<div className="mourner-list">
			 <h2>Who is here mourning their dead?</h2>
			  <ul>
			  {this.props.loading ? <h3>Loading...</h3> : <MournersList users={this.props.users}/> }
			  </ul>
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
// state = {
	// 	users: '',
	// 	loading: false
	// }