// state -- names 
//semantic-ui-react -- make a card around this, or a section. 

import React, { Component } from 'react'
// import { connect } from 'react-redux'


class Mourners extends Component {
	
	render() {
		const nameList = ["rob", "Miriam", "Tamar"];

		const names = nameList.map((name, index) => <span key={index}> {name} </span>)

		return (
			<div className="mourner-list">
			 <h2>Who is here mourning their dead?</h2>
			  <h3>{names}</h3>
			</div>
		)
	}
}
// const mapStateToProps() {
// 	return {


// 	}
// }
export default Mourners
// export default connect(null, {getUsers})(Mourners)

//call an action that calls a fetch, on
			//component will mount 
			  // {this.props.loading ? <h3>Loading...</h3> : <Mourners names={names}/> }
			