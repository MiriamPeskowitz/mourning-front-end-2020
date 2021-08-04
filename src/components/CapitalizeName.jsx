//does this need to import react, if it's only a reusable function w/ no render? 


const CapitalizeName = (username) => {
	const name = username
	const capitalizedUsername = name.charAt(0).toUpperCase() + name.slice(1)
	return capitalizedUsername
}
export default CapitalizeName