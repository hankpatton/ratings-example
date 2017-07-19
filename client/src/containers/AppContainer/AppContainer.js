import React, { Component } from 'react'
import AddRatingForm from '../../forms/AddRating'

class RatingsList extends Component {
  state = {
    loading: true,
    ratings: {},
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6 offset-sm-3'>
            <AddRatingForm />
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsList
