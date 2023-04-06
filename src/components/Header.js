import React from 'react';
import { CTA } from './CTA';
import '../style/hero.css'

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-hero-wrapper">
          <img
            className="logo-hero"
            src="../icons/logo.svg"
            alt="" />
          <img
            className="burger"
            src="../icons/hamburger.svg"
            alt="" />
        </div>
        <div className="hero-overlay">
          <h1>The health revolution starts with you</h1>
          <p>Access 100+ yoga classes and receive a personalized nutrition
             plan - for holistic health anytime, anywhere.  Achieve optimal health and
             balance through our comprehensive wellness program.
          </p>
          <CTA test>Start your 7-day FREE trial</CTA>
        </div>
      </div>
    </header>
  )
}

export default Header