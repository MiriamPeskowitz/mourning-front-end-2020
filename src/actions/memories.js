import { resetMemoryForm } from "./memoryForm"
//sync
export const addMemory = () => {
	// console.log("got to addMemory")
}

//async
export const createMemory = (data, history) => {
	// console.log("Got to createMemories")
	return (dispatch) => {
		const sendableData = {
      name: data.memoryFormData.name,
			years: data.memoryFormData.years,
			image: data.memoryFormData.image,
			notes: data.memoryFormData.notes,
      user_id: data.currentUserId
    }
     	console.log("sendableEntryData", sendableData)
     const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(sendableData)
		}
		return fetch( "/entries", config)
		.then(response => response.json())
		.then(memory => {
			// console.log('entry in addNewMemory.data', memory.data)
			dispatch(addMemory(memory.data.attributes))
			dispatch(resetMemoryForm())
			history.push(`/memories/${memory.data.id}`)
		}
	)
	.catch(err => console.log(err))
	}
}