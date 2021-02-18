import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import MournersList from '../components/MournersList'


class Mourners extends Component {

	componentDidMount(){
		this.props.getUsers()
	}
	
	state = {}

	alphaList = (users) => {
		const newUsers = [...users]
	 	const sortedUsers = newUsers.sort((a, b) => {
		 	const nameA = a.attributes.username.toUpperCase()
		 	const nameB = b.attributes.username.toUpperCase()
		 	//gives numeric value to username string and assesses that
		 	if (nameA < nameB) {
		    return -1;
		  }
		  if (nameA > nameB) {
		    return 1;
		  }
		  return 0;
			})
		
	 this.setState({sortedUsers});
	 
	}


	render() {	
		const {users} = this.props
		
		return (
			<div className="mourner-list">
			 <h2>Who is here mourning their dead?</h2>
			 <button onClick={() => this.alphaList(users)}>Click here to alphabetize</button>
			<div>
				{this.state.sortedUsers ? <MournersList users={this.state.sortedUsers} /> : <MournersList users={this.props.users} />}
			
			  </div>
			</div>
		)
	}
}

			 // <button onClick={() => this.alphaList(users)}>Click here to alphabetize</button>

const mapStateToProps = state => {
	return {
		users: state.usersReducer.users,
		loading: state.usersReducer.loading
	}
}

export default connect(mapStateToProps, { getUsers } )(Mourners)
  // {this.props.loading ? <h3>Loading...</h3> : <MournersList users={this.props.users} /> }
	// componentDidUpdate(previousProps) {
	// 	this.props.users && !previousProps.users && this.props.getusers(this.props.users)
	// }
// const alphaList = (users) => {
// 		const newUsers = users.sort((a, b) => {
// 		 	const nameA = a.attributes.username.toUpperCase()
// 		 	const nameB = b.attributes.username.toUpperCase()
// 		 	//gives numeric value and assess that
// 		 	if (nameA < nameB) {
// 		    return -1;
// 		  }
// 		  if (nameA > nameB) {
// 		    return 1;
// 		  }
// 		  return 0;
// 			})		
//    <MournersList users={newUsers}	 />
// 	}
