import React, { Component } from 'react'
import axios from 'axios'
import { groupBy, meanBy } from 'lodash'

class RatingsList extends Component {
  state = {
    loading: true,
    ratings: {}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/api/ratings')
      //reorder data by user for this view (hack to change later)
      .then(res => this.setState({ ratings: groupBy(res.data, "userEmail"), loading: false }))
      .catch(error => this.setState({ loading: false, error: error }))
  }

  getUserAverage(id) {
    return meanBy(this.state.ratings[id], 'rating')
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {Object.keys(this.state.ratings).map(k => {
          return (
            <div key={k} className='user-list'>
              <div className='user-list-item' style={{marginBottom: 8}}>
                <span className='user' style={{marginRight: 12}}>{k}</span>
                <span className='rating'>{this.getUserAverage(k)}</span>
              </div>
            </div>
          )})}
      </div>
    )
  }
}

export default RatingsList
