import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="left">
            <img src={assets.logo} alt="" />
            <p>This is the food company</p>
            <div className="socail-media-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

            
        </div>
        <div className="center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us </li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>6363868277</li>
                <li>kvijay20204567@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copy 2024 © Toamto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
