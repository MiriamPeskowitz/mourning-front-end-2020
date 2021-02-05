//keeps entryform data in store, not local data 
const initialState = {
	title: "", 
	content: ""
	}

export default(state=initialState, action) => {
	switch (action.type) {
		case  "UPDATE_ENTRY_FORM":
		  // return action.formData 
		  const returnVal = {
       ...state,
        [action.formData.name]: action.formData.value
      }
      console.log("reducer returnVal", returnVal)
      return returnVal;
		case "RESET_ENTRY_FORM":
		  return initialState

		default:
			return state
	}
}

//combine updateentry and updateEditEntry if the same thing 