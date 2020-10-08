import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar'

class App extends React.Component {
	render() {
	  return (
	    <div className="App">
	    <Navbar>SignUp LogIn Profile Main</Navbar>
	     <h2>Who is here mourning their dead</h2>
	     <h2>What they are saying</h2>
	    </div>
	  );
	}
}

export default App;
