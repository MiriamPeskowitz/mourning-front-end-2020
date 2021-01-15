import { resetEntryForm } from "./entryForm"

export const addEntry = entry => {
	return {
		type: "ADD_ENTRY",
		action: entry
	}
}
//  add setMyEntries, clearEntries, deleteEntrySuccess
//updateEntrySuccess


//refactor this so it fits the newer design pattern,use sync action
//creator setEntries for Entries Loaded
const getEntries = () => {
	return (dispatch) => {
		dispatch({type: "LOADING_ENTRIES"})
		return fetch("/entries")
		.then(res => res.json())
		.then(entries => {			
			dispatch({
			  type: "ENTRIES_LOADED", 
			  payload: entries.data
			})
		})
		.catch(err => console.log(err))
	}
}
export default getEntries
//does this GET request need config? 
// return fetch("/entries", {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })

//create a single entry, linked to currentUser
export const createEntry = (formData, history) => {
	console.log("New Entry: ", formData)
	return (dispatch) => {
		//create object of data in rails format? 
		const newEntryData = {
	      title: formData.title,
  			content: formData.content,
        user_id: formData.userId
  			 // public: formData.public
  			 //date? or take from date-create on the back end 	
  		}
		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(newEntryData)
			}
		return fetch( "/entry", config)
		.then(response => response.json())
		.then((entry) => console.log("payload:newEntry: ", entry))
		.then((entry) => {
			if (entry.error) {
				alert(entry.error)
			} else {
				console.log("New Entry from backend, ready to be sent to store: ", entry.data)
				dispatch(addEntry(entry.data))
				//decide what I want to do with it -- send to reducer  to add to the store/
				//so that it can be called and put on DOM  
			
				dispatch(resetEntryForm())
				history.push('/profile')
				// history.push('/entries/${entry.data.id')
			}
		})
		.catch(console.log("from actions/entryForm.js: createEntry didn't work"))
	}
}

// const updateEntry
//const deleteEntry



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

// export const createTrip = (tripData, history) => {
//   return dispatch => {
//     const sendableTripData = {
//       start_date: tripData.startDate,
//       end_date: tripData.endDate,
//       name: tripData.name,
//       user_id: tripData.userId
//     }
//     return fetch("http://localhost:3001/api/v1/trips", {
//       credentials: "include",
//       method: "POST",
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
//           dispatch(addTrip(resp.data))
//           dispatch(resetTripForm())
//           history.push(`/trips/${resp.data.id}`)
//           // go somewhere else --> trip show?
//           // add the new trip to the store
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

// export const deleteTrip = (tripId, history) => {
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/v1/trips/${tripId}`, {
//       credentials: "include",
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(r => r.json())
//       .then(resp => {
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           dispatch(deleteTripSuccess(tripId))
//           history.push(`/trips`)
//           // go somewhere else --> trip show?
//           // add the new trip to the store
//         }
//       })
//       .catch(console.log)

//   }

// }
