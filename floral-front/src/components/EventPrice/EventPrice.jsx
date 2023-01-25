import React from 'react'
import "./eventPrice.scss"
const EventPrice = () => {
  return (
    <div className='event-wrapper'>
        <div className='event-title'>
            <p>Devoted to wonderful beauty</p>
            <h2> Events Pricing</h2>
        </div>
        <div className='eventCard-wrapper'>
            <div className='eventCard'>
                <div>
                    <span className='price'>$16</span>
                    <span> per table</span>
                </div>
                <h4>Birthday Events</h4>
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                <button>Shop now</button>
            </div>
            <div  className='eventCard'>
                <div>
                    <span className='price'>$31</span>
                    <span> per table</span>
                </div>
                <h4>Wedding Events</h4>
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                <button>Shop now</button>
            </div>
            <div  className='eventCard'>
                <div>
                    <span className='price'>$52</span>
                    <span> per table</span>
                </div>
                <h4>Party Events</h4>
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                <button>Shop now</button>
            </div>
           
        </div>
    </div>
  )
}

export default EventPrice
