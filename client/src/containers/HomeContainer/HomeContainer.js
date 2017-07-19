import React, { Component } from 'react'
import axios from 'axios'
import { groupBy, meanBy, round } from 'lodash'

import AddRatingForm from '../../forms/AddRating'
import RatingsListItem from '../../components/RatingsListItem'

class RatingsList extends Component {
  state = {
    loading: true,
    ratings: {}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/api/ratings', {
      headers: { authorization: localStorage.getItem('token')}
    })
      //reorder data by user for this view (hack to change later)
      .then(res => this.setState({ ratings: groupBy(res.data, "userEmail"), loading: false }))
      .catch(error => this.setState({ loading: false, error: error }))
  }

  getUserAverage(id) {
    return round(meanBy(this.state.ratings[id], 'rating'))
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-8 offset-sm-2'>
            <AddRatingForm handleUpdate={this.fetchData.bind(this)} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h2 style={{ textAlign: "center" }}>Users</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 offset-sm-3'>
            {Object.keys(this.state.ratings).length > 0
              ? (
                <div className='user-list'>
                  {Object.keys(this.state.ratings).map(user =>
                    <RatingsListItem key={user} user={user} rating={this.getUserAverage(user)} />
                  )}
                </div>
              )
              : <div style={{ textAlign: 'center' }}>Sorry, no active users. Add a Rating!</div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default RatingsList
