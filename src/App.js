import React from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import './css/App.css';

class App extends React.Component {
	render() {
		probably this moves to the Mourners container, or a component named MournerList 
	  const names = this.props.users.map((user, id) => <li key={id}>{user}</li>)
	  return (
	    <div className="App">
	    <Navbar>SignUp LogIn Profile Main</Navbar>

	     <h2>Who is here mourning their dead</h2>
	     <ul>
		    {this.props.loading ? <h3>Loading...</h3> : <Mourners users={namelist}/> }
	     </ul>
	     <h2>What they are saying</h2>
	    </div>
	  );
	}
}
const mapStateToProps = state => {
	return {
		names: state.userReducer.users, //fix this up, use debugger
		loading: state.userReducer.loading
	}
}


export default connect(mapStateToProps)(App);
