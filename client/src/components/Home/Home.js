import React from 'react'
import AddRatingForm from '../../forms/AddRating'

const Home = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <AddRatingForm />
        </div>
      </div>
    </div>
  )
}

export default Home
