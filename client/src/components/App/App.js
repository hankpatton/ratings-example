import React, { Component } from 'react';
import RatingsList from '../../containers/RatingsList'

class App extends Component {
  render() {
    return (
      <div className="home-page" style={{textAlign: 'center'}}>
        <RatingsList />
      </div>
    );
  }
}

export default App;
