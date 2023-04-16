import React from 'react'
import '../../All styles/AboutUS.css'
import ElderlyPick from '../../assets/Images/Elderly.png'
import Ellipse from '../../assets/Images/Ellipse_13.jpg'

function AboutUS() {
  return (
    <>
      <div className="AboutUS_container mt-5">
        <div className='FLex_container'>
          <div className='imgOverlay_container'>
            <div className='bg_img'></div>
            <div className="overlay_img">
              <img src={ElderlyPick} alt="elderlyFamily" />
            </div>
          </div>
          <div>
            <header>ABOUT US</header>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUS
