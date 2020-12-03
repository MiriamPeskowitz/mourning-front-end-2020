import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers/index'

import './stylesheets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  	<Router>
	  	<App />
	</Router>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
