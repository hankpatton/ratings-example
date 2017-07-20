import React, { Component } from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/api/auth/signin', { email: this.state.email, password: this.state.password })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/')
      })
      .catch(() => {
        this.setState({ error: 'Incorrect email or password' })
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="Email"
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            name="password"
            type="password"
            placeholder="Password"
            className='form-control'
            required
          />
        </div>
        {this.state.error &&
          <div className='alert alert-danger'>
            {this.state.error}
          </div>
        }
        <button type="submit" className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

export default SignIn
