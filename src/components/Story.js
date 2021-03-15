import React from 'react'
// import CurrentUserNavBar from './CurrentUserNavbar'
import { NavLink } from 'react-router-dom'
import '../stylesheets/App.css'

const Story = () => {
	const gray = {color: '#C0C0C0'};
	return (
		<div className="story">
			<NavLink class="left-margin" style={gray} exact to="/">Home</NavLink> 
			<h2 id="story-title"> A space for feelings and memory</h2>
				<section id="story-paragraphs">
				<p>My dad died in May 2017.  During that time, friends were loving and attentive. As the days and weeks passed, it was only natural for people to stop asking how my mourning was going. I wasn't sure how to communicate this, either. 
				</p>
				<p>I spent a year actively mourning my dad. I remembered his passing each day, usually on the morning dogwalk to a nearby woods. I'd pause near the entry to quietly chant or hum the mourner's prayer. It felt beautiful and also lonely. At times I imagined other ways that a person could mourn, could let friends know what she was feeling, and how.
				</p>
				
				<p>That's where this online space, Mourning, comes in. We need spaces to mourn, to grieve. Perhaps it's the chance to write out our feelings. To create a bit of an altar or remembrance site. To share with friends. We need a place to keep track of the many people -- close and far -- that meant something to us and who are no longer alive, a cemetery of our imaginations, for this moment.
				</p>
			</section>
		</div>
	 )
}

export default Story



// <p>Halfway through March 2020 life in the US changed. People became afraid, people got sick, people died. My neighbor John's mother died. She was 95, in assisted living. She was fine and then she wasn't and it was Covid. My neighbor George Sr. died. He was 87, and had taken ill in January. We were watching his dog Jack for him. George Sr had been back and forth between the hospital and the rehab a few times. He was set to return home and then, he was in the hospital, dying from Covid. They were the first in my life, and far from the last. Unlike when I was mourning my dad, it's not at all clear who we mourn people we don't know well, but whose deaths touched us. It's simply something that we don't have a clear cultural understanding of. 
// 				</p>