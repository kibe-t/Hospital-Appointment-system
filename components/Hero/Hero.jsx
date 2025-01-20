import React from 'react'

import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroleft'>
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className='handhandicon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>collections for every one</p>
            </div>
            <div className='herolatestbtn'>
                <div>latest collection</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>
        <div className='heroright'>
            <img src={hero_image} alt="" />

        </div>

    </div>
  )
}

export default Hero