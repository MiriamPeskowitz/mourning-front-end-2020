initialState = {
	todos: []
}

case EDIT_TODO: 
return ...state, {
	todos: state.todos.map(todo => {
	if (todo.id !== action.id) {
		return todo
	}
	return 
		...todo, {
			text: action.text
		}

		}
	})

updateObject(oldObject, newValues) {
	return ...oldObject, newValues
}

updateItemInArray = (array, itemId, updateItemCallBack) => {
	const updatedItems = array.map(item => {
		if (item.id !== itemId) {
			return item
		}
		const updatedItem = updatedItemCallback(item)
		return updatedItem 
	})
	return updatedItems
}

const 'EDIT_TODO': 
	{
		const newTodos = updateItemInArray(state.todos, action.id, todo => {
			return updatedObject(todo, {text: action.text})
		})
		return updatedObject(state, { todos: newTodos })
	}




//may need to change, simi to addNewEntry currentUser : {}
			// case "UPDATE_ENTRY":
			// 		...state,
			// 		currentUser: {
			// 			state.currentuser,
			// 		}
			// 	return state.map(entry => entry.id === action.entryIdd ? action.entry : entry)
			
