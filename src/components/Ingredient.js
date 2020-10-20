import React from 'react';
import { Link } from 'react-router-dom'
//here, to render a linl (not from a button)
//based pn the ingredient, I want to hit the match, and slugify 

const Ingredient = () => {

		return (
			<div>
				<link
					to={`/ingredients/${props.ingredient.split(" ").join("_")}`} 
					//related to {this.props.match.params.id }
					//creating a link that puts the ingredient name in the url 
				><button>{props.ingredient}</button></Link>
//you can put a button inside the link 
			</div>
	);
}
export default Ingredient
//split, lowercase, join with underbar