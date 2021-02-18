experimental --when I was trying to figure out history; not connected anywhere. 

import { CreateBrowserHistory } from 'history'

export default CreateBrowserHistory({})
//does this need a config object? 
// 
then: in index.js
import { Router } from 'react-router-dom'
import history from './history'

<Router history={history}
=> but do I change my BrowserRouter to Router? 

other files
import history from '.history'
history.push("profile or whatever")

or use withHistory and get history in props 

Because: BrowserRouter creates its own instance of the history object
and only listens to changes on its own instance. 

https://stackoverflow.com/questions/42672842/how-to-get-history-on-react-router-v4

or 
 import { withRouter } from 'react-router-dom'

 or this: 

 import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}


and 
<Route .... path.. render={(props) => <SignUp />

or: !!
f you are using redux and redux-thunk the best solution will be using react-router-redux

import { push } from 'react-router-redux'

dispatch(push('/some/path'))
