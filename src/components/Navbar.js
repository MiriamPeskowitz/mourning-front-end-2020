import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/App.css';

const link = {
  width: '100px',
  padding: '0px',
  margin: '2px 2px 2px',
  textDecoration: 'none',
  color: 'white'
 }

const liststyle = {
    listStyle: 'none'
  }

const Navbar = (props) => {
	return (
		<div className="Navbar">
			<ul style={ liststyle }>
				<li><NavLink to='/' exact style={ link } activeStyle={{ background: 'royalBlue'}}>Main</NavLink></li>

				<li><NavLink to='/SignUp' exact style={ link } activeStyle={{ background: '#e69500' }}>Register</NavLink></li>

				<li><NavLink to='/Login' exact style={ link } activeStyle={{ background: '#e69500' }}>Login</NavLink></li>

				<li><NavLink to='/Story' exact style={ link } activeStyle={{ background: 'violet' }}>Story</NavLink></li>

				<li><NavLink to='/Profile' exact style={  link } activeStyle={{ background: '#cd5c5c' }}>Profile</NavLink></li>
			</ul>
		</div>
	)
}

export default Navbar

