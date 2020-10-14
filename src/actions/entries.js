const getEntries = () => {
	return (dispatch) => {
		dispatch({type: "LOADING_ENTRIES"})
		return fetch("/entries")
		.then(res => res.json())
		.then(entries => {			
			dispatch({
			  type: "ENTRIES_LOADED", 
			  payload: entries.data})
		})
	}
}

export default getEntries

