import React from 'react';
import HeroImage from '../images/Hero-hq.png'
import './Landing.css';
import Intro from './Intro'

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero-image" style={{ backgroundImage: `url(${HeroImage})` }} />
      <div className="color-bg" />
      <Intro />
    </div>
  )
}

export default Landing;