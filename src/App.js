import React from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Mourners from './containers/Mourners'
import './css/App.css';

class App extends React.Component {
	render() {
		const names = this.props.names.map((name, id) => <span key={id}>{name}</span>)
	  return (
	    <div className="App">
	    <Navbar>SignUp LogIn Profile Main</Navbar>
	     <h2>Who is here mourning their dead</h2>
	     <ul>
		    {this.props.loading ? <h3>Loading...</h3> : <Mourners /> }
	     </ul>
	     <h2>What they are saying</h2>
	    </div>
	  );
	}
}
const mapStateToProps = state => {
	return {
		names: state.usersReducer.users,
		loading: state.usersReducer.loading
	}
}


export default connect(mapStateToProps)(App);
