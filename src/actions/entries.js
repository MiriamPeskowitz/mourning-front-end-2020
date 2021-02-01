import { resetEntryForm } from "./entryForm"
// import { updateEntryForm } from "./entryForm"


export const entriesLoading = () => {
	console.log('got to LOADING_ENTRIES')
	return {
		type: "LOADING_ENTRIES",
	}
}

export const setEntries = entries => {
		return	{
			  type: "ENTRIES_LOADED", 
			  payload: entries.data
			}
}

export const addEntry = newEntry => {
	console.log('got to addNewEntry this is the payload', newEntry)
	return {
		type: "ADD_NEW_ENTRY",
		payload: newEntry
	}
}

export const clearEntries = () => {
	console.log("got to clearEntries")
	return {
		type: "CLEAR_ENTRIES"
	}
}
//  add setMyEntries, clearEntries, deleteEntrySuccess
//updateEntrySuccess

// export const updateEntry = entry => {
// 	return {
//     type: "UPDATE_ENTRY",
//     action: updatedEntry
//   }
// }

export const getEntries = () => {
	return (dispatch) => {
		return fetch("/entries", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
		.then(dispatch(entriesLoading()))
		.then(res => res.json())
		.then(entries => {
			if (entries.error) {
			alert(entries.error)
			} else {		
			dispatch(setEntries(entries))
			dispatch(resetEntryForm())
			}
		})
		.catch(err => console.log(err))
	}
}


export const createEntry = (entryData, history) => {

	return (dispatch) => {
		const sendableEntryData = {
      title: entryData.entryFormData.title,
			content: entryData.entryFormData.content,
      user_id: entryData.currentUserId
    }
   
			 // public: formData.public
  			 //date? or take from date-create on the back end 	
  	
		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(sendableEntryData)
		}

		return fetch( "/entries", config)
		.then(response => response.json())
		.then(entry => {
			console.log('entry in addNewEntry.data', entry.data.attributes)
			dispatch(addEntry(entry.data.attributes))
			dispatch(resetEntryForm())
			history.push(`/entries/${entry.data.id}`)
		}
	)
	.catch(err => console.log(err))
	}
}

	// if (entry.error) {
			// 	alert(entry.error)
			// } else {

				// .then(resp => {
    //     if (resp.error) {
    //       alert(resp.error)
    //     } else {
    //       dispatch(addTrip(resp.data))
    //       dispatch(resetTripForm())
    //       history.push(`/trips/${resp.data.id}`)
    //       // go somewhere else --> trip show?
    //       // add the new trip to the store
    //     }
    //   })
    //   .catch(console.log)


export const updateEntry = (entryData, history ) => {
	return dispatch => {
		const sendableEntryData = {
      title: entryData.entryFormData.title,
			content: entryData.entryFormData.content,
      user_id: entryData.currentUserId
    }

		const config = {
			method: 'PATCH',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(sendableEntryData)
		}

		return fetch( `/${entryData.id}`, config)
		.then(response => response.json())
		.then(entry => {
			if (entry.error) {
				alert(entry.error)
			} else {
			console.log('updateEntry.data', entry.data.attributes)
			dispatch(addEntry(entry.data.attributes))
			dispatch(resetEntryForm())
			history.push(`/entries/${entry.data.id}`)
			}
		})
	.catch(err => console.log(err))
	}
}

export const deleteEntry = (entryId) => {
	console.log("got to deleteEntry")
}
// export const updateTrip = (tripData, history) => {
//   return dispatch => {
//     const sendableTripData = {
//       start_date: tripData.startDate,
//       end_date: tripData.endDate,
//       name: tripData.name
//     }
//     return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
//       credentials: "include",
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(sendableTripData)
//     })
//       .then(r => r.json())
//       .then(resp => {
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           dispatch(updateTripSuccess(resp.data))
//           history.push(`/trips/${resp.data.id}`)
//           // go somewhere else --> trip show?
//           // add the new trip to the store
//         }
//       })
//       .catch(console.log)

//   }
// }

// const updateEntry
//const deleteEntry

		 //goes to EntriesReducer 
		// .then(data => console.log("payload:newEntry.title: ", data.attributes.entries[0].title))
		
		// 		console.log("New Entry: ", ent)
		// 		// dispatch(addEntry(entry.data))
		// 		//decide what I want to do with it -- send to reducer  to add to the store/
		// 		//so that it can be called and put on DOM  
			
		// 		// dispatch(resetEntryForm())
		// 		// history.push('/profile')
		// 		// history.push('/entries/${entry.data.id')
		// 	})
		// })

// samples from Globetrotter, for update and delete 
// export const clearTrips = () => {
//   return {
//     type: "CLEAR_TRIPS"
//   }
// }

// export const addTrip = trip => {
//   return {
//     type: "ADD_TRIP",
//     trip
//   }
// }

// export const deleteTripSuccess = tripId => {
//   return {
//     type: "DELETE_TRIP",
//     tripId
//   }
// }

// export const updateTripSuccess = trip => {
//   return {
//     type: "UPDATE_TRIP",
//     trip
//   }
// }

// // async actions

// export const getMyTrips = () => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/v1/trips", {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//       .then(r => r.json())
//       .then(response => {
//         if (response.error) {
//           alert(response.error)
//         } else {
//           dispatch(setMyTrips(response.data))
//         }
//       })
//       .catch(console.log)
//   }
// }


// export const updateTrip = (tripData, history) => {
//   return dispatch => {
//     const sendableTripData = {
//       start_date: tripData.startDate,
//       end_date: tripData.endDate,
//       name: tripData.name
//     }
//     return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
//       credentials: "include",
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(sendableTripData)
//     })
//       .then(r => r.json())
//       .then(resp => {
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           dispatch(updateTripSuccess(resp.data))
//           history.push(`/trips/${resp.data.id}`)
//           // go somewhere else --> trip show?
//           // add the new trip to the store
//         }
//       })
//       .catch(console.log)

//   }
// }


