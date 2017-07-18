import React, { Component } from 'react'
import axios from 'axios'
import './AddRating.css'

class AddRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: '1'
    }
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/ratings', {
      userEmail: this.state.email,
      rating: this.state.rating,
    })
    .then(res => this.setState({ email: '', rating: 1 }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-8 offset-sm-2'>
          <form className='add-rating-form' onSubmit={this.handleSubmit}>
            <h4 className='add-rating-title'>Rate A User</h4>
            <div className="form-group">
              <label>Email address</label>
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <input
                value={this.state.rating}
                onChange={e => this.setState({ rating: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Rating"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block rating-button">Submit Rating</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddRating