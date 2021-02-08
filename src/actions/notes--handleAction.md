
const NewTripFormWrapper = ({history}) => {

const handleSubmit = (event, formData, userId, history) => {
	event.preventDefault()
	createTrip({
		...formData,
		userId
	}, history)
}
const handleChange =... 

return (
	<form onSubmit={event => handleSubmit( formData, userId, history)}>
	<input 
		placeholder="name"
		name="name"
		onChange={handleChange}
		value={name}
		/>
<TripForm history={history} handleSubmit={handleSubmit) />}
}

export default connect(null, { createTrip}(NewTripFormWrapper)

***
/need to populate thefield 
/when click on edit button, when this mounts/is loaded
/don't need to use const 
/ figure out new way to bring in props} = ({history, updateTrip}) => {
import react, updateTrip, setFormDataForEdit 

class EditTripFormWrapper extends react.Component {
	
	componentDidMount() {
	  this.props.setFormDataForEdit(this.props.entry)
	}

	handleSubmit = (event, formData, userId, history) => 	//arguments	{
		const { history, updateTrip } = this.props //props
		event.preventDefault()
		updateTrip({
			...formData,
			userId
		}, history)
	}
	const handleChange =... 

render() {
return (
	<form onSubmit={event => handleSubmit( formData, userId, history)}>
	<input 
		placeholder="name"
		name="name"
		onChange={handleChange}
		value={name}
		/>
<TripForm history={history} handleSubmit={handleSubmit) />}
}

edit route - pass trip to component
updateTrip({
	...formData, 
	tripId: trip.id,
	userId
})
export default connect(null, { updateTrip}(NewTripFormWrapper)

***

const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    // 4.  This is not an invocation of just the action creator,
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateTripForm(name, value)
  }
