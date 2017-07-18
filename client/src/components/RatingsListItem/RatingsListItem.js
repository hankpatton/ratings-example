import React from 'react'
import './RatingsListItem.css'

const RatingsListItem = ({ user, rating }) => {
  return (
    <div className='ratings-list-item'>
      <span className='ratings-user' style={{marginRight: 12}}>{user}</span>
      <span className='ratings-star'>
        {Array(rating).fill().map((_, i) =>
          <i className="material-icons" key={i}>star</i>
        )}
      </span>
    </div>
  )
}

export default RatingsListItem
