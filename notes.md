

 

	-- fix css centering etc  



		-- the blue line, chrome => accessibility https://stackoverflow.com/questions/42423371/how-do-i-remove-the-blue-border-that-appears-when-clicking-on-a-uib-accordion-he



Jan 4. Figuring things out
---App.js calls Navbar.js, which gets you to Home.js and the Entries and Mourners
--- user can signup -- and make a profile page  
		-- how does a user get to their profile page? 
		-- what is on the profile page: chance to write personal blogs, ala caringbridge, where friends can sign up to get a notice when the mourner writes a new entry. 
-- Signup -- when successful -- goes to login page which says Welcome Back and makes you login
--DOne -- Login -- change password entry field to type=password. 
--

jan 5, 1.20 pm. Saved branch fix-login. Now: merge, get back to main, then create basic branch, delete everything. This will be the branch I use for the project eval. 
Right now: main doesn't work, but it has the full everything. 
make new branch jwt-full-login -- RETURN TO THIS or MAIN to get everything. 

1.37: new branch is: basic. servers working, data comes through. 

The sign-in isn't working. Why?

User has Entries. User has Profile 


https://dev.to/mmcclure11/flatiron-final-project-rails-api-react-redux-e0g

 
-- mostly fixed, there is an async issue that I need to figure out. 
--star work on profile. Look at caring bridge and make a list of what should go here. 

People I am mourning. What should I call this category? 
	name, age, relationship. date of death. notes. images 
	Card for each one 
	They can stack up. 

--small fixes, add capitalization to username 
Profile --new build out from here. 
	EntryForm
	PersonalEntries
	AllEntries

Works!!! Entries appear on the profile page! 

Monday 
-- next: 
 -- clean up current code OKAY
 -- make sure everything works as is OKAY
 -- then: 
   -- do the profile - entry - entry card components OKAy
   -- profile routing -- profile should be users/1, etc 
  Monday night: added cards, can click on an entry to edit (and eventually delete) NEXT: the data doesn't go through. I can get from profile to http://localhost:3000/entry/14 -- but what shows up is the null part of the ternary, as if data isn't coming through yet  `

 -- then do Bootstrap

-- Stretch: do the People I remember cards. 
Model: dead_people -- user has_many my_people
dead_people attributes: name, age at death, date of death, relationship, image, add as many notes or memories as you want. 

Friday
-- route in App.js DONE 
-- change profiles colors to match the front yellow and blue 
--make jane's page not have an a:visited feature
-- create new entry -- make sure this works 
-- edit entry - 

Monday 
-- next: update form, fields don't change 
-- deleteEntry -- where shouyld it push == 

handleChange = () 
 const { name, value } = event.target
    updateTripForm(name, value)
what does updateTripForm do 

How to populate the form 
What props does it need? 
 value needs to be populated" 

 The problem with getting the trip values --
 Trip object is passed to the form... 
 It was supposed to start empty -- 
 but for this updateForm
 Tell redux what the form data shuold be 

 action that updates the whole form 
 setFormDataForEdit() = trip => {
 set up the data exactly to fit the form 
 const tripFormData = {
 	name: trip.attributes.name
 ,	title: 
}
 return {
 tripFormData 
 	type: "SET_FORM_DATA_FOR_EDIT",
 	trip
}
return action.tripFormData
 editmode=true 
 same as 
 editmode == assumes boolean and true 
}
 Thursday: 
 getting there. 
 Figuring out now: how to get the updated data back in the field d 

 Still- field not updating
 reducer not triggering
 gets to the action, but the action creator doesn't call the reducer 
 Fixed the handleChange problem -- make sure to pull reduxified version of functions into the handleChange function 
 
 ALL DONE 
 -- debug new entry/create DONE 
 -- debug why logout doesn't trigger new session navbar 

SundayDONE, what a great day, I solved so many problems 

-- create and edit work, test DONE 
-- delete isn't working. Why? DONE
-- change click back to delete DONE 
-- now: page refresh back to profile - needs to pull the new list -- it worked when page didn't refresh, but now now. 
--okay it can't send back successfully. why? 
It's almost like it's trying to double-delete, and then it can't find 
the id # 
-- Maybe make my Entries link to a new component, 
and make that a class compoonent 
DONE -- put the history.push before the call to the reducer, and somehow that worked. Delete works fully, page refr

Monday: 
-- add loading to all, be consistent 
-- //cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//will show all the entries of a single user 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries


people
have name, date of death, relationship, about, images, age at death
belongs to: user
card: user, image on top 

Component structure; mirror ProfileEntryCards 
 ProfileMemoryCards
 --use react-bootstrap for style 
 https://react-bootstrap.github.io/components/cards/
<div className="profile-entry-cards">
	<p><Link to="entries/new" >Create a new entry </Link></p>
	<ProfileEntryCards />
</div>

-- backend, make the model 
--start putting on heroku and netflify 
-- also, find a start to injecting bootstrap 

-- how to add JEST tests
		-- test functionality 
		-- test for how it renders in browser  
-- how to add basic rspect tests for an api
-- https://reactjs.org/docs/testing-recipes.html 
- react-router v4
- 

Smaller to-dos
-- DONE, for nowfront end READme -- find a model , add api repo 
-- fix signup, doesn't reset or push to new page, and shows error but the new user is created in the backend DONE, i think 

Tuesday
  -- DONE wired up loading feature for welcome back username DONE
  -- DONE action types? DONE, for convention's sake; debugging, using constants not strings as case names, per redux docs. 
  -- How to edit your personal description, user.description
  -- How to add date of death there -- add attribute to model 
  -- DONE change users call to be like the others DONE
  --logout -> home. Doesn't reset the currentuser to none DONE< FIxed with Cernan 

  -- reverse list -- DONE
  -- how to limit list and add a more button? 
  --how to add images
  -- a place to edit the description -- add a form-action-reducer 
  -- add the backend 
  -- 

  Wednesday: 
  -- branch description-form is where I'm working on this featyure, 
  -- create eval branch for changes made during  eval. I can decide later whether to bring them over to main. 
  

Monday changes
  -- Change color of Mourning DONE 
  -- get rid of alert that no one is logged in
  -- DONE About page -- has welcome back, even when no one is logged in. Remove the whole line 
  -- DONE About page -- remove every nav except Home
  -- DONE About page -- much more margin and padding 
  -- Edit and spell check the about page 
  -- Update description -- description card edit 
  -- DONE story -- maybe take out third graph here 


