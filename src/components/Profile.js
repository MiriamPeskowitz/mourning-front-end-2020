import React, { Component } from 'react'

class Profile extends Component {
	state = {
		username:     ,
		email:     , 
		description: .
		entries
	}

	render() {
		return(
			<div>
	      <h1>{this.state.username}</h1>
	      <div>
	      <label>Description</label>
	      	<h3 className="description">{this.state.description}</h3>
	      </div>
	      <div>
	      	<label> Personal Entries </label>
	      	<ul> Call in component that winds through the personalEntries </ul>
		)
	}

}
export default Profile

//open Dashboard 