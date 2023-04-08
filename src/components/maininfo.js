import React from 'react';
import './css/main.css'
import { Header } from './logo.js'
import Picture from './images/picturestart.png'
import JoinUs from './images/joinus.png'

export const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-image">
        <img src={Picture} alt="woman standing on one leg" className="startPicture" />
        <Header className="Header" />
        <p className="goBeyond">GO</p>
        <p className="goBeyond1">BEYOND</p>
        <p className="goBeyond2">THE</p>
        <p className="goBeyond3">LIMITS</p>
      </div>

      <div className="hero-paragraph">
        <p>
              Physical activity is vital for the body. Learn how to master
              unique skills where you&apos;ll
              develop strength, confidence and you&apos;ll defy yourself.
        </p>
        <a href="mailto:acrogym@sportsorg.se">
          <img className="joinButton" src={JoinUs} alt="button" />
        </a>

      </div>
    </div>
  );
}

