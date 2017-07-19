import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { signInUser } from '../../store/actions'

class SignUp extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signInUser({ email, password })
  }

  render() {
    const { handleSubmit, errorMessage } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <div className='form-group'>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <Field
            name="password-confirm"
            component="input"
            type="password"
            placeholder="Confirm Password"
            className='form-control'
          />
        </div>
        {this.props.errorMessage &&
          <div className='alert alert-danger'>
            {this.props.errorMessage}
          </div>
        }
        <button type="submit" className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}

SignUp = reduxForm({
  form: 'signup'
})(SignUp)

export default connect(mapStateToProps, { signInUser })(SignUp)
