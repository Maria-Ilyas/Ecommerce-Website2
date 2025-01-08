import React from 'react';
import { FaHandsClapping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero1 from "../assets/hero3.avif";
import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hands'>
                    <p>New</p> 
                    <FaHandsClapping className='hand-icon' />
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className='latest'>
                <div>Latest Collection</div>
                <FaArrowRightLong  />
            </div>
        </div>
        <div className="hero-right">
            <img src={Hero1}/>
        </div>
    </div>
  )
}

export default Hero