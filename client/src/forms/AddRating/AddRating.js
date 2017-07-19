import React, { Component } from 'react'
import axios from 'axios'
import './AddRating.css'

class AddRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      rating: 1,
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers() {
    axios
      .get('/api/users', { headers: { authorization: localStorage.getItem('token')}})
      .then(res => this.setState({ users: res.data, loading: false }))
      .catch(error => this.setState({ loading: false, error: error }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/ratings', {
      user: this.state.id,
      rating: this.state.rating,
    }, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(res => this.setState({ id: '', rating: 1 }))
    .catch(err => console.log(err))
  }

  render() {
    const { id, rating, users } = this.state
    return (
      <form className='add-rating-form' onSubmit={this.handleSubmit}>
        <h4 className='add-rating-title'>Rate A User</h4>
        <div className="form-group">
          <label>Email address</label>
          <select
            value={id}
            onChange={e => this.setState({ id: e.target.value })}
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          >
            <option value="" disabled>Select a User</option>
            {users.map((user, i) => {
              return <option key={i} value={user._id}>{user.email}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <div className='rating-stars'>
            {Array(5).fill().map((_, i) =>
              <i className="material-icons rating-star" key={i} onClick={() => this.setState({rating: i + 1})}>
                {rating >= i + 1 ? 'star' : 'star_border'}
              </i>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block rating-button">Submit Rating</button>
      </form>
    )
  }
}

export default AddRating
