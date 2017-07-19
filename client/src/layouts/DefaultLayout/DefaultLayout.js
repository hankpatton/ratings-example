import React from 'react';
import { connect } from 'react-redux'
import { signOutUser } from '../../store/actions'
import './DefaultLayout.css';

const DefaultLayout = ({ authenticated, children, signOutUser }) => {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <i className="material-icons header-stars">star</i>
          <i className="material-icons header-stars">star</i>
          <i className="material-icons header-stars">star</i>
          <i className="material-icons header-stars">star</i>
          <i className="material-icons header-stars">star</i>
        </div>
        <h1 className='site-name'>Welcome to Ratings</h1>
        {authenticated &&
          <div onClick={signOutUser}>logout</div>
        }
      </div>
      <div className='App-body container'>
        {children}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, { signOutUser })(DefaultLayout)
