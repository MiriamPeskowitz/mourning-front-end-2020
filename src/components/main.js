Different ways to do it. 

import {BroswerRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation'
import IngredientsContainer from './containers/IngredientsContainer'
import IngredientsList from './containers/IngredientsList'

//wrap in Router, then add a Switch 
//each route -- what is the path I want to match? 
//on this path, which component shoudl show. 
//so 1, wrap and switch the routes, 2. make Navigation.js for styling, etc
//3 then add Navigation component here. 
function App() {
	return (
		<Router>
			<Navigation />
			<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/categories" component={CategoriesContainer}/>
				<Route exact path="/ingredients" component={IngredientsContainer}/>
				<Route exact path="/ingredients/:id" component={IngredientsList}/>
					//this one doesn't go into Navigation.js. You don't hit it 
					//with a button on a nav bar, but by clicking on an 
					//ingredient 
			</Switch>
			//<Home />
			// <CategoriesContainer /> Then get rid of the regular rendering of a component 
			//it all goes trhough routes now. 
		</div>
		<Router
		)
}

1. add Router
2. make the Switch/Route
3. Next: the ability to truly navigate 
