import React from 'react';
import './css/main.css'
import Woman from './images/womanstart.png'
import { Header } from './header.js'

export const Hero = () => {
  return (
    <div className="hero-container">
      <Header />
      <img src={Woman} alt="Woman Start" className="woman" />
      <p className="goBeyond">GO</p>
      <p className="goBeyond1">BEYOND</p>
      <p className="goBeyond2">THE</p>
      <p className="goBeyond3">LIMITS </p>

      <div className="hero-paragraph">
        <p>Physical activity is vital for the body.
      Learn how to master unique skills where
      you&aposll develop strength, confidence and
      you&aposll defy yourself.
        </p>
      </div>
    </div>
  );
}