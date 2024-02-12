import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
            <img  className = "logo" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header