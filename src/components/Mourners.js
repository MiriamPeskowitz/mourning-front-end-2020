import React, { Component } from 'react'
import { connect } from 'react-redux'
import getUsers from '../actions/users'
import MournersList from '../components/MournersList'

class Mourners extends Component {
	componentDidMount(){
		this.props.getUsers()
	}
	
	render() {		
		return (
			<div className="mourner-list">
			 <h2>Who is here mourning their dead?</h2>
			  <div>
			  {this.props.loading ? <h3>Loading...</h3> : <MournersList users={this.props.users} /> }
			  </div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		users: state.usersReducer.users,
		loading: state.usersReducer.loading
	}
}

export default connect(mapStateToProps, { getUsers } )(Mourners)
