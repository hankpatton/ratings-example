import React from 'react';
import './DefaultLayout.css';

const DefaultLayout = (props) => {
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
        <h2 className='site-name'>Welcome to Ratings</h2>
      </div>
      <div className='App-body container'>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout;
