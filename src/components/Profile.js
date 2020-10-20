import React, { Component } from 'react'

class Profile extends Component {
	state = {
		username:  "",
		email:  "", 
		description: "",
		entries: []
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
	      	<h4>Call in component that winds through the personalEntries</h4>
	      	<ul>  </ul>
	      </div>
	    </div>
		)
	}

}
export default Profile

//open Dashboard 