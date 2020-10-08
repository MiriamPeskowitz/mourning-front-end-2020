import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import getUsers from './actions/users'
import './css/App.css';

class App extends Component {
	componentDidMount(){
		this.props.getUsers()
		console.log("CDM")
	}
	render() {
	  return (
	    <div className="App">
	    	<Navbar>SignUp LogIn Profile Main</Navbar>
		    {this.props.loading? <h3>Loading...</h3> : <Mourners names={this.props.names}/>}
	    	<h2>What they are saying? What do they need? </h2>
	    </div>
	  )
	}
}

const mapStateToProps = state => {
	return {
		names: state.userReducer.users,
		loading: state.userReducer.loading
	}
}

export default connect(mapStateToProps, {getUsers})(App);

// probably this moves to the Mourners container, or a component named MournerList 
	  //getting it to work, then make it a fetch 
	  
	  // componentDidMount() {
	  	// getUsers
	  // }

//  add a getEntries too, to component did mount
