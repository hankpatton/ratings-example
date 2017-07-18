import React, { Component } from 'react';
import AddRatingForm from '../../forms/AddRating'
import RatingsListContainer from '../../containers/RatingsListContainer'

class App extends Component {
  render() {
    return (
      <div className="home-page" style={{ textAlign: 'center' }}>
        <AddRatingForm />
        <RatingsListContainer />
      </div>
    );
  }
}

export default App;
