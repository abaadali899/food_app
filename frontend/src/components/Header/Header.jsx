import React from 'react'
import './Header.css'
  

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p> From hearty meals to light bites, our menu offers something for every taste and occasion. Whether you're craving a classic favorite or looking to try something new, our chefs are ready to serve you an unforgettable dining experience.</p>
            <button className='menuBtn '> View Menu</button>
        </div>
    </div>
  )
}

export default Header