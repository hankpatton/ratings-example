
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
