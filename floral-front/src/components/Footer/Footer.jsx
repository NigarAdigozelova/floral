import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-wrapper'>
        <li>
          <ul className='email'>
            <li><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
            </li>
            <li><input type="text" placeholder='Your Email' /> <button>Send</button></li>
          </ul>
        </li>
        <li>
          <ul className='links'>
            <li>
              <ul className='left-links'>
                <li className='about'>About</li>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Our Services</li>
              </ul>
            </li>
            <li>
              <ul className='right-links'>
                <li className='about'>Contact</li>
                <li>Contact Us</li>
                <li>FAQ Page</li>
                <li>About Me</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='follow'>Follow Us</li>
      </ul>
    </div>
  )
}

export default Footer