import React from 'react'
import Navbar from './Navbar'
import Mourners from './Mourners'
import Entries from './Entries'

const Home = () => {
	return (
		
		<div className="Home">
			<Navbar />
  		<Entries />
  		<Mourners />
	  </div>
	 )
}

export default Home


