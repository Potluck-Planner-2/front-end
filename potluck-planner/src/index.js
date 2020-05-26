import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Reducer } from './Redux/reducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk, logger))



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


