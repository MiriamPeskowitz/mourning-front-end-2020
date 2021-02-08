Next: 
-- DONE get rid of bullets with list, 

-- DONE Make nav bar for real: clarify workflow: navbar with links, the route
	-- DONE navigation moved to navbar.js
	-- DONE what is the right syntax for where the switch goes? 
-- DONE Fix color of nav bar buttons 
	-- Need to get the auth working 
	-- Need to organize what shows when, 

	-- fix css centering etc  

	-- build out auth 
		-- DONE add user signup
			-- DONE test out file? adds to db? WORKS!!
			-- add rest -- including history 
		-- DONE add login

-- add jwt 


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


Signup: 
-get data
--this.props.signupUser(user, () => this.props.history.push('/'))


Wednesday: okay, try to use spacecowboy as a model, and redo/simplify mine. The focus is the profile page -- the homepage just pulls from stuff. Homepage is the currentUser 

Mon Jan 11 
Goal: be able to get current user
Starting again. Decided to use sessions first, then change to JWT 
-- fix sessions and applicationController -- 

 Tuesday. start with getCurrentUser 
--action -- getCurrentUser 
-- reducer -- DONE 
Current User -- almost,
Do a big debug of all the login/signup stuff. 
Start with signup 
signup -- is new entry created? 
----- created and fixed up signup

-- DONE ALSO: something is stuck, FIXED
--DONEALSO: signupFormData is undefined -- FIX THIS MIDNIGHT< got it. I 
was calling signupFormData: state.signupForm when 
it needed to be signupFormData: state.signupFormReducer. BUT I FIGURED IT OUT> 
NOW: signup page loads. 
NEXT: make the backend work for signup-- DONE 

NEXT: Once signup works, make login work, and then 
get current user. Then I'm done -- can make more features in profile, including entries 

Thursday: 
NEXT: Fix the logout, esp the backend. Follow the flow of data. 

https://dev.to/mmcclure11/flatiron-final-project-rails-api-react-redux-e0g

Thurs at 1.50. Auth is working, logout works, now: something is happening, where loginReducer is clearing Welcome user prints, then user deletes 
Figure out why. 

Thursday afternoon 
-- mostly fixed, there is an async issue that I need to figure out. 
--star work on profile. Look at caring bridge and make a list of what should go here. 

People I am mourning. What should I call this category? 
	name, age, relationship. date of death. notes. images 
	Card for each one 
	They can stack up. 
Am I writing to me, or writing for others? 
Entries. 
	this is under user.entries etc 

--small fixes, add capitalization to username 
Profile --new build out from here. 
	EntryForm
	PersonalEntries
	AllEntries

actions/entries.js
I have the general -- now I need to add the show -- the create.


CreateEntryForm
-- frontend WORKS, make sure addEntry action creators work 
-- connect to backend. What is the route, to get to user.entry 
	-- fixed action-creator DONE
	-- made reducer add entry DONE
	-- routes? should be part of RESTFUl - DONE 
	-- create DONE
	-- transmit user id from front-end, OR DONE
	capture current_user, since only current_user will make an entry 
j_all = j.entries.all
j_all.map {|entry| entry.title}
	way to get titles, for a frontend list 
http://localhost:3001/api/v1/users/31

Works!!! Entries appear on the profile page! 

Monday 
-- next: 
 -- clean up current code OKAY
 -- make sure everything works as is OKAY
 -- then: 
   -- do the profile - entry - entry card components OKAy
   -- profile routing -- profile should be users/1, etc 
  Monday night: added cards, can click on an entry to edit (and eventually delete) NEXT: the data doesn't go through. I can get from profile to http://localhost:3000/entry/14 -- but what shows up is the null part of the ternary, as if data isn't coming through yet  `

entry on Entry card is undefined -- not getting passed through 
match.params.id is a string not integer --> 

{history: {…}, location: {…}, match: {…}, staticContext: undefined}
history: {length: 50, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
location: {pathname: "/entry/9", search: "", hash: "", state: undefined, key: "66cojz"}
match:
isExact: true
params:
id: "9"
__proto__: Object
path: "/entry/:id"
url: "/entry/9"
__proto__: Object
staticContext: undefined
__proto__: Object

 -- then do Bootstrap

-- change home page -- make names a separate category, separate from the
descriptions, so home page has three colored sections 

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

Sunday
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

