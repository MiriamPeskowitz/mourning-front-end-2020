import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import MournersList from '../components/MournersList'

class Mourners extends Component {
	componentDidMount(){
		this.props.getUsers()
	}
	
	render() {		
		return (
			<div className="mourner-list">
			 <h3>Who is here mourning their dead?</h3>
			  <div>
			  {this.props.loading ? <h5>Loading...</h5> : <MournersList users={this.props.users} /> }
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
