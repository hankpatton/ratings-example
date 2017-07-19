

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
