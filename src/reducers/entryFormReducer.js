//keeps entryform data in store, not local data 
const initialState={
	title: "", 
	content: "", 
	public: "no" }

export default(state=initialState, action) => {
	switch (action.type) {
		case  "UPDATE_ENTRY_FORM":
		  return action.formData 
		case "RESET_ENTRY_FORM":
		  return initialState
		default:
			return state
	}
}
