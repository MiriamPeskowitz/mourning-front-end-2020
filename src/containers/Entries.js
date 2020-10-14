
import React, { Component } from 'react'
import { connect } from 'react-redux'
import getEntries from '../actions/users'
import EntriesList from '../components/MournersList'

class Mourners extends Component {
	// state = {
	// 	name: '',
	// 	loading: false
	// }
	componentDidMount(){
		this.props.getEntries()
		console.log("ComponentDidMount")
	}

	render() {		
		return (
			<div className="entry-list">
			 <h2>What they are saying? What do they need? </h2>
			   <ul>
			     {this.props.loading ? <h3>Loading...</h3> : <EntryList entries="data goes here"
			    /> }
			   </ul>
			</div>
		)
	}   
}
const mapStateToProps = state => {
	return {
		entries: state.EntryReducer.entries,
		loading: state.EntryReducer.loading
	}
}


export default connect(mapStateToProps, {get} )(Mourners)

