import React, { Component } from 'react'
import { connect } from 'react-redux'
import getEntries from '../actions/entries'
import EntriesList from '../components/EntriesList'

class Entries extends Component {
	
	componentDidMount(){
		this.props.getEntries()
		console.log("ComponentDidMount/Entries")
	}

	render() {		
		return (
			<div className="entry-list">
			 <h2>What they are saying? What do they need? </h2>
			 {this.props.loading ? <h3>Loading...</h3> : <EntriesList entries={this.props.entries} />}
			</div>
		)
	}   
}
const mapStateToProps = state => {
	return {
		entries: state.entryReducer.entries,
		loading: state.entryReducer.loading
	}
}

export default connect(mapStateToProps, {getEntries} )(Entries)

