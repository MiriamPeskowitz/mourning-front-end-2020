import React from 'react'
// import { connect } from 'react-redux'
// import routes from './routes'
import Navbar from './components/Navbar'
import Entries from './containers/Entries'
import Mourners from './containers/Mourners'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Mourners />
			<Entries />
    </div>
  )
}

export default App














