import React, { Component } from 'react'
import MealsContainer from './MealsContainer'

//goal is to return 


export class IngredientsList extends Component {
	render() {
		return (
			<div>
				<h2>The Meals With {this.props.match.params.id.split("_").join(" ")}</h2>
				//match id because the url has id -- its the 4th one. 
				//
				<MealsContainer searchTerm={this.props.match.params.id.split("_").join(" ")} searchType="i" banner="", history={this.props} /> //we need to send it a search term, wheter by category or ingredient 
			</div>
		)//banner -- is a handthrough, through props, 
		//ALWAYS SEND THE HISTORY!!
	}
}
//in meals container, which I don't have, account for the i. 
export default IngredientsList