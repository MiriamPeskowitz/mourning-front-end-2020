import React, { Component } from 'react'
import { connect } from 'react-redux'
import MemoryCard from './MemoryCard'
import ProfileEntryCards from './ProfileEntryCards'
import CreateEntryForm from './CreateEntryForm'
import EntryCard from './EntryCard'
import { Route, Switch, withRouter } from 'react-router-dom'

const Profile = ({ currentUser}) => {

//1`
//how to manage the update of ProfileEntryCards, after new one is added? 
//ComponentDidMount? 
// Make it a class component? 

//Why does this Profile page 
//come in blanck when not accessed from 
//App? 

//2 -- getting the data to the Entry card/for show page to edit/delete 

		console.log("Profile currentUser: ", currentUser.id)
	

		const data = currentUser.entries
			console.log("entries: ", data)

		return (
			<>
			<div className="profile">
				<h2>{currentUser.username}</h2>
				<div>
					<CreateEntryForm />
					<ProfileEntryCards />
					
			
				</div>
				<MemoryCard />	
			</div>
		
		<Switch>
			<Route exact path='/entry/:id' render={ ( data) => {
					console.log(data)
					const entry = data.find(ent=> ent.id === ent.match.params.id)
					// id in params.match is a string 
					console.log("entry in ROute/App: ", entry)
					return (<EntryCard entry={entry} {...data} />)
						}
					} />
		</Switch>
		</>
	)
}
		//cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//will show all the entries of a single user 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries


const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));

	// const entriesDisplay = entries.map(e => <p>{e.title}--{e.content}</p>)
	// const PersonalEntryCard = props.personalEntries.length
	// const entriesDisplay = data.entries.map(e => <p>{e.title}--{e.content}</p>)

// <div> {entriesDisplay} </div>
// 	const feelings = entries.map((entry) => (
// 		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
// 	))
// 	return <ul style={{color: 'yellow'}}>{feelings}</ul>
// }