import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import Entries from './containers/Entries'

import './css/App.css';

class App extends Component {
	
	render() {
	  return (
	    <div className="App">
	    	<Navbar>SignUp LogIn Profile Main</Navbar>
	    	<Mourners />
	    	<Entries />
	    
	    </div>
	  )
	}
}

// const mapStateToProps = state => {
// 	return {
// 		names: state.userReducer.users,
// 		loading: state.userReducer.loading
// 	}
// }
export default App
// export default connect(mapStateToProps)(App);


//add <Entries /> when ready 
