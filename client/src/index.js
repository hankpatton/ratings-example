import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { AUTH_USER } from './store/actions/types'
import './index.css';
import { browserHistory } from 'react-router';
import Routes from './routes';
import reducers from './store/reducers'


const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleWare(reducers)

// if you have a token update redux store
if (localStorage.getItem('token')) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>
  , document.getElementById('root')
);
