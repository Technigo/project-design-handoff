import React from 'react'
import './Intro.css';
import { Button } from './Button';

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>See New Heights with Aerial Silks</h1>
      <h2>Unleash your inner acrobat with our exhilarating full-body workout.</h2>
      <Button className="signup-btn">Sign Up today</Button>
    </div>
  )
}

export default Intro;