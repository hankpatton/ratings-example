import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import './index.css';
import { browserHistory } from 'react-router';
import Routes from './routes';
import reducers from './store/reducers'


const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <Routes history={browserHistory} />
  </Provider>
  , document.getElementById('root')
);
