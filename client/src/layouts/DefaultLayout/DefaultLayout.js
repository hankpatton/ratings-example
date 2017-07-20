import React, { Component } from 'react'
import './DefaultLayout.css'

class DefaultLayout extends Component {
  signOutUser = () =>{
    localStorage.removeItem('token')
    window.location.href = '/signin'
  }

  render() {
    const authenticated = localStorage.getItem('token')
    return (
      <div className="App">
        <div className="App-header">
          {authenticated &&
            <button className='btn btn-sm btn-danger logout-btn' onClick={this.signOutUser}>logout</button>
          }
          <div>
            <i className="material-icons header-stars">star</i>
            <i className="material-icons header-stars">star</i>
            <i className="material-icons header-stars">star</i>
            <i className="material-icons header-stars">star</i>
            <i className="material-icons header-stars">star</i>
          </div>
          <h1 className='site-name'>Welcome to Ratings</h1>
        </div>
        <div className='App-body container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
