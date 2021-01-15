export default(state = {entries: [], loading: false}, action) => {

	switch(action.type){
	
		case "LOADING_ENTRIES":
			return {
				...state,
				loading: true
			}
	
		case "ENTRIES_LOADED":
			return {
				...state,
				entries: action.payload,
				loading: false
			}

		case "ADD_NEW_ENTRY":
		console.log("reducer new Entry: ", action.newEntry)
			return 	state.concat(action.newEntry)
			
	//...state, action.entry ??
		default:
			return state
	}
}


// const initialState = []

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_MY_TRIPS": = ENTRIES LOADED -- refactor 
//       return action.trips
//     case "ADD_TRIP":
//       return state.concat(action.trip)
//     case "UPDATE_TRIP":
//       return state.map(trip => trip.id === action.trip.id ? action.trip : trip)
//     case "DELETE_TRIP":
//       //console.log( "action.tripId is ", action.tripId)
//       return state.filter(trip => trip.id === action.tripId ? false : true)
//     case "CLEAR_TRIPS":
//       return initialState