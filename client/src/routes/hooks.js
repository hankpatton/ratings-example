import axios from 'axios'

// redirect users to signin if not signed in
export function requireAuth() {
  return function(nextState, replace, cb) {
    if (!window.localStorage.getItem('token')) {
      replace({
        pathname: '/signin',
        state: {
          nextPathname: nextState.location.pathname
        }
      })
      return cb()
    }
    axios
      .get('/api/users/me', { headers: { authorization: localStorage.getItem('token')}})
      .catch(error => {
        localStorage.removeItem('token')
        window.location.href = '/signin'
      })
    cb()
  }
}

// redirect users away from signin if already signed in
export function redirectSignin() {
  return function(nextState, replace, cb) {
    if (window.localStorage.getItem('token')) {
      replace({
        pathname: '/',
        state: {
          nextPathname: nextState.location.pathname
        }
      })
      return cb()
    }
    cb()
  }
}
