import React from 'react'
import './SignIn.css'
import { Link } from 'react-router'
import SignInForm from '../../forms/SignIn'

const SignIn = (props) => {
  return (
    <div className='row'>
      <div className='col-sm-6 offset-sm-3'>
        <div className='sign-in-wrapper'>
          <h4>Please Sign in.</h4>
          <SignInForm />
        </div>
        <div className='signup-message'>
          <Link to='/signup'>No Account? Please Sign up.</Link>
        </div>
      </div>
    </div>
  )
}


export default SignIn
