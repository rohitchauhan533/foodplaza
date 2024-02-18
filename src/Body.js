import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='res-container'>
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body