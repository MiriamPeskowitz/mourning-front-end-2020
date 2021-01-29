							
// <Route exact path="/entries/:id" render={ props => {
// 							// console.log("in entries/:id", props.entries, entries, props)
							
// 							const entry = entries.find(entry => entry.id === props.match.params.id)
// 							// console.log("route-entry: ", entry)
							
// 							return <EntryCard entry={entry} {...props}  />
// 							}
// 						}/>	

	// id in params.match is a string 
 //  		<Route exact path='/entries/:id' render={ ( props) => {
				// 		console.log("data passed in render: " , props)
				// 		const entry = entries.find(entry=> entry.id === props.match.params.id)
				// 		// id in params.match is a string 
				// 		console.log("entry in Route/App : ", entry)
				// 		return (<EditCard entry={entry} {...props} />)
				// 		}
				// 	}/>



// <Route exact path='/entry/:id' render={ ( props) => {
					// 	console.log("data passed in render: " , props)
					// 	const entry = entries.find(entry=> entry.id === props.match.params.id)
					// 	// id in params.match is a string 
					// 	console.log("entry in Route/App : ", entry)
					// 	return (<EditCard entry={entry} {...props} />)
					// 	}
					// }/>


// <Route exact path='/entry/:id' render={ ( props) => {
					// 	console.log(props)
					// 	const entry = entries.find(ent=> ent.id === props.match.params.id)
					// 	// id in params.match is a string 
					// 	console.log("entry in ROute/App: ", entry)
					// 	return (<EntryCard entry={entry} {...props} />)
					// 		}
					// 	} />

  			// { loggedIn ? <p>LOGGEDIN</p> : <p>NOT LOGGED IN</p> }

//delete one of the home paths 


//render={ (entries, props) => {
						// 	//working here to fix what's coming in -- and how will it 
						// 	//get to the Entry Card 
							
						// 	const entry = entries.find(entry => entry.id === props.match.params.id)		
						// 	console.log("routes-entry:", entry)					// console.log("entry in Route/App : ", entry)
						// 	return (<EntryCard  entry={entry} {...props} />) 
							
						// 	}
						// }/>


//						// 	console.log("App-entries-- route:", entries)	
						// 	console.log("props.match.params.id-- route:", props.match.params.id)	
							
						// 	const entry = props.entries.find(entry => entry.id === props.match.params.id)		
						// 	console.log("entry in Route/App : ", entry)
						// 	return (<EntryCard  entry={entry} {...props} />) 
							
						// 	}
						// }/>



// export default withRouter(connect(mapStateToProps, {} )(EntryCard))

// link should be a button that opens up the form -onClick, open editForm


// import { connect } from 'react-redux'
// import { createEntry } from '../actions/entries.js'
// import { updateEntryForm }  from '../actions/entryForm.js'

// const createEntryForm = ({ currentUser, entryFormData, createEntry, updateEntryForm, history }) => {
// 	//now id/curremtUser.id is doubled; fix 

// 	const handleChange = (e) => {
// 		const updatedFormInfo = {
// 			...entryFormData,
// 			[e.target.name]: e.target.value
// 		}
// 		updateEntryForm(updatedFormInfo)
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		createEntry(entryFormData, currentUser.id, history)
// 	}
	
// 	return (
// 		<div className="login">
// 			<h3>Create new entry</h3>
// 			<form onSubmit={handleSubmit}> 
// 				<div>
// 					<input 
// 						placeholder={}
// 						type="text" 
// 						name="title" 
// 						onChange={handleChange}
// 						value={entryFormData.title}
// 					/>
// 				</div>
// 				<div>
// 					<input 
// 						placeholder="How are you feeling?"
// 						type="text" 
// 						name="content" 
// 						onChange={handleChange}
// 						value={entryFormData.content}
// 					/>
// 				</div>
// 				<br/>
// 				<input 
// 					type="submit" 
// 					value="Save" 
// 				/>
// 			</form>
// 		</div>
// 	)
// }

// //add public/private boolean 
// const mapStateToProps = state => {
//   return { 
//   	entryFormData: state.entryFormReducer,
//   	currentUser: state.authReducer.currentUser
//   }
// }

// export default connect(mapStateToProps, { updateEntryForm  })(createEntryForm)



// const mapStateToProps = state => {
// 	return ({
// 			currentUser: state.authReducer.currentUser,
// 			entryData: state.authReducer.currentUser
// 		})
// }
	
// export default connect(mapStateToProps, null )(EntryCard)


//
// const mapStateToProps = (state) => {
// 	return ({
// 		currentUser: state.authReducer.currentUser,
// 		entries: state.authReducer.currentUser.entries
// 	})
// }
