import React, { Component } from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    error: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.passwordConfirm) {
      return this.setState({ error: 'Sorry, passwords do not match.' })
    }
    axios
      .post('/api/auth/signup', { email: this.state.email, password: this.state.password })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/')
      })
      .catch(() => {
        this.setState({ error: 'Email is already in use.' })
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
        <div className='form-group'>
          <label>Password</label>
          <input
            value={this.state.passwordConfirm}
            onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
            name="password-confirm"
            type="password"
            placeholder="Confirm Password"
            className='form-control'
            required
          />
        </div>
        {this.state.error &&
          <div className='alert alert-danger'>
            {this.state.error}
          </div>
        }
        <button type="submit" className='btn btn-primary'>Sign Up</button>
      </form>
    )
  }
}
export default SignUp
