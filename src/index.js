import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

const middleware = [thunk];

const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(...middleware))
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));