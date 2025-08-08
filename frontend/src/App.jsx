 import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import ReserveTable from './components/ReserveTable/ReserveTable';
import Review from './pages/Review/Review'
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import MenuPage from './pages/Menu/MenuPage'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
         <Route path="/reserve" element={<ReserveTable />} />
         <Route path='/reviews' element={<Review />} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/menu" element={<MenuPage />} />




      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App


 