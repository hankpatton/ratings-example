import React, { Component } from 'react';
import AddRatingForm from '../../forms/AddRating'
import RatingsList from '../../containers/RatingsList'

class App extends Component {
  render() {
    return (
      <div className="home-page" style={{textAlign: 'center'}}>
        <AddRatingForm />
        <RatingsList />
      </div>
    );
  }
}

export default App;
