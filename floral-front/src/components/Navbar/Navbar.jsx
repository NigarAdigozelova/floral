import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='left-nav'>
            <h1>Floral Studio</h1>
        </div>
        <div className='right-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">Add</Link></li>
                <li><Link to="portfolio">Portfolio</Link></li>
                <li><Link to="pricing">Pricing</Link></li>
                <li><Link to="contact">Contacts</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar