// import React from 'react'
// import { connect } from 'react-redux'
// import { deleteEntry } from "../entries/auth.js"
// import { withRouter } from 'react-router-dom'

// //experimented to see if this was needed
// //probably delete, moved functionality into 
// //entry card 

// const Delete = ({ deleteEntry, history}) => {

// 	return (
// 		<>
// 		<h3>Are you sure you want to delete this entry?</h3>
// 		<form onSubmit = {(event) => {
// 			event.preventDefault()
// 			deleteEntry()
// 			history.push('/profile')
// 			}
// 		}>
// 				<input type="submit" value="Delete" />
// 		</form>	
// 		</>
// 	)
// }

// export default withRouter(connect(null, { deleteEntry} )(Logout))

