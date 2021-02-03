// const initialState = {
// 	title: entryFormData.title, 
// 	content: entryFormData.content,
// 	id: entryFormData.id
// 	}

const initialState = {
	title: '',
	content: '',
	id: ''
}
export default(state = initialState, action) => {
	switch(action.type) {
		case "SET_FORM_DATA_FOR_EDIT":
			console.log('reducer: entryFormData', action.payload)
			return action.payload

		default: 
			return state
	}
}