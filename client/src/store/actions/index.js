import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types'

export function signInUser({ email, password }) {
  return function(dispatch) {
    axios
      .post('/api/auth/signin', { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/')
      })
      .catch(() => {
        dispatch(authError('Incorrect email or password'))
      })
  }
}

export function signOutUser({ email, password }) {
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER})
    localStorage.removeItem('token')
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
