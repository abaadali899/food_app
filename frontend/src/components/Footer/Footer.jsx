// import React from 'react'
// import PrivacyPolicy from '../../pages/Privacy/PrivacyPolicy'
// import './Footer.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//         <div className="footer-content">
//             <div className="footer-content-left">
//                 <img src={assets.logo} alt="" />
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum in, beatae dolorem non optio cupiditate, quam sunt dicta dolores minima exercitationem ducimus totam aut asperiores inventore harum laudantium. Distinctio, libero.</p>
//                 <div className="footer-social-icons">
//                     <img src={assets.facebook_icon} alt="" />
//                     <img src={assets.twitter_icon} alt="" />
//                     <img src={assets.linkedin_icon} alt="" />
//                 </div>
//             </div>
//             <div className="footer-content-center">
//                 <h2>COMPANY</h2>
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Delivery</li>
//                     <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                    
//                 </ul>
//             </div>
//             <div className="footer-content-right">
//                 <h2>GET IN TOUCH</h2>
//                 <ul>
//                     <li>+92 765489545</li>
//                     <li>raosamad@gmail.com</li>
//                 </ul>
//             </div>
           
//         </div>
//         <hr />
//         <p className="footer-copyright">
//             Copyright 2025 &copy; Samad Rao - All Right Reserved.
//         </p>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Experience the taste of modern dining. Delicious food, fast delivery, and great ambiance. 
            Join us for a meal to remember!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>📞 +92 765489545</li>
            <li>📧 raosamad@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        &copy; 2025 Samad Rao — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
