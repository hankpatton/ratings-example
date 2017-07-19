import React from 'react'
import SignUpForm from '../../forms/SignUp'

const SignIn = (props) => {
  return (
    <div className='row'>
      <div className='col-sm-6 offset-sm-3'>
        <div className='sign-in-wrapper'>
          <h4>Please Sign up.</h4>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}


export default SignIn
