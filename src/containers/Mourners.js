// state -- names 
//semantic-ui-react -- make a card around this, or a section. 

import React, { Component } from 'react'
// import { connect } from 'react-redux'

class Mourners extends Component {

	render() {
		const names = ["rob", "Miriam", "Tamar"] 

		const Rnames = names.map((name, index) => <li key={index}> {name} </li>)

		return (
			<div className="mourner-list">
			  <h3>Mourners: </h3>
			  <ul>{Rnames} </ul>
			
			</div>
			
		)
	}


}
export default Mourners
// export default connect(mapStateToProps)(Mourners)

//call an action that calls a fetch, on
			//component will mount 
			  // {this.props.loading ? <h3>Loading...</h3> : <Mourners names={names}/> }
			