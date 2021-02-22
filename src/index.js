import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/index'
import './stylesheets/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
	  	<App />
	  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
