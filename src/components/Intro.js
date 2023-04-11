/* eslint-disable */

import React from 'react';
import '../css/Intro.css';

import HeroHandsonBarre from '../assets/Hero – Hands on Barre.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="imageContainer">
        <img className="heroImage" src={HeroHandsonBarre} alt="Hands on barre" />
          <h1 className="mobileTitle">Raise the Barre With Us!</h1>
      </div>
      <div className="presentation">
        <p>Join our full-body workout inspired by Ballet, Pilates, and Yoga.</p>
        <button type="button" className="joinUsBtn">Join Us!</button>
      </div>
    </div>
  )
}

export default Intro;