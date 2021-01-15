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
