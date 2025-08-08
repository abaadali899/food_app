import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets'
import { StoreContext } from './../context/StoreContext'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
    setMobileMenuOpen(false)
  }

  return (
    <div className='navbar'>

      {/* Logo */}
      <Link to='/'><img src={assets.logo} alt="Logo" className='logo' /></Link>

      {/* RIGHT SECTION (for mobile: placed on left of hamburger) */}
      <div className="navbar-right mobile-left">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>

      {/* CENTER MENU */}
      <ul className="navbar-menu">
        <Link to='/' onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <Link to='/menu' onClick={() => handleMenuClick('menuItem')} className={menu === 'menuItem' ? 'active' : ''}>Menu</Link>
       <Link to='/reserve' onClick={() => handleMenuClick('reserve-table')} className={menu === 'reserve-table' ? 'active' : ''}>Reserve</Link>
        <Link to='/contact' onClick={() => handleMenuClick('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</Link>
        <Link to='/reviews' onClick={() => handleMenuClick('reviews')} className={menu === 'reviews' ? 'active' : ''}>Reviews</Link>
      </ul>

      {/* Hamburger */}
      <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="navbar-menu-mobile">
          <Link to='/' onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
           <Link to='/menu' onClick={() => handleMenuClick('menuItem')} className={menu === 'menuItem' ? 'active' : ''}>Menu</Link>
         <Link to='/reserve' onClick={() => handleMenuClick('reserve-table')} className={menu === 'reserve-table' ? 'active' : ''}>Reserve</Link>
         <Link to='/contact' onClick={() => handleMenuClick('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</Link>
          <Link to='/reviews' onClick={() => handleMenuClick('reviews')} className={menu === 'reviews' ? 'active' : ''}>Reviews</Link>

          
        </ul>
      )}
    </div>
  )
}

export default Navbar
