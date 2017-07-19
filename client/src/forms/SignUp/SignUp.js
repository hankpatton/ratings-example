import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { signUpUser } from '../../store/actions'

class SignUp extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signUpUser({ email, password })
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
            required
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
            required
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
            required
          />
        </div>
        {errorMessage &&
          <div className='alert alert-danger'>
            {errorMessage}
          </div>
        }
        <button type="submit" className='btn btn-primary'>Sign Up</button>
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

export default connect(mapStateToProps, { signUpUser })(SignUp)
