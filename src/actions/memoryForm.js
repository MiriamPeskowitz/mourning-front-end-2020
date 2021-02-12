export const updateNewMemoryForm = (name, value) => {
	const formData= {
		name: name, 
		value: value
	}
	return {
		type: "UPDATE_MEMORY_FORM",
		formData
		}
}

export const resetMemoryForm = () => {
	return {
		type: "RESET_MEMORY_FORM",
		}
} 
