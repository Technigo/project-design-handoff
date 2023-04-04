import React from 'react'
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Raise the Barre With Us!</h1>
      <div className="hero-text-container">
        <p className="hero-text-content">Join our full-body workout inspired
by Ballet, Pilates, and Yoga.
        </p>
        <Button text="Join us!" />
      </div>
    </div>

  )
}

export default HeroSection;