import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import './css/App.css';

class App extends Component {
	render() {
		
	  return (
	  	
	    <div className="App">
	    	<h1>hello</h1>
	    	<Navbar>SignUp LogIn Profile Main</Navbar>
	    	<h2>Who is here mourning their dead?</h2>
		    <Mourners />
	    	<h2>What they are saying? What do they need? </h2>
	    </div>
	  );
	}
}
export default App;
// export default connect(mapStateToProps)(App);

// probably this moves to the Mourners container, or a component named MournerList 
	  //getting it to work, then make it a fetch 
	  
	  // componentDidMount() {
	  	// getUsers
	  // }


// const mapStateToProps = state => {
// 	return {
// 		names: state.userReducer.users, //fix this up, use debugger
// 		loading: state.userReducer.loading
// 	}
// }
