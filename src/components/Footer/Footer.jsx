import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-contents">
        <div className="footer-left">
            <img src={assets.logo} alt=""  className='logoimg'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae assumenda sit deserunt suscipit mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus adipisci perspiciatis sint, ipsam non?</p>
            <div className="footer-social">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            
        </div>
        
        <div className="footer-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+94 245 2145 245</li>
                <li>ajjifoodie@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024. Ajji Foodie-All rights reserved</p>
    </div>
  )
}

export default Footer
