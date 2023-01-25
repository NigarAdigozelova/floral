import React from 'react'
import "./team.scss"
const Team = () => {
  return (
    <div className='team-wrapper'>
      <div className='team-article'>
        <p><i>Contacts</i></p>
        <h1>Our Team</h1>
      </div>
      <div className='team-cards'>
        <div className='team-card'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
          <div className='card-item'>
            <h4>Velva Kopf</h4>
            <p><i>Biologist</i></p>
          </div>
        </div>
        <div className='team-card'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
          <div className='card-item'>
          <h4>Sarah Palmer</h4>
            <p><i>Florist</i></p>
          </div>
        </div>
        <div className='team-card'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
          <div className='card-item'>
          <h4>Jessica Swift</h4>
            <p><i>Photgrapher</i></p>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Team