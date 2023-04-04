import React from 'react'
import Carousel from '../components/Carousel'

const AboutSection = () => {
  return (

    <section className="about-section">
      <h1>Come Sweat It Out
    at the Barre
      </h1>
      <p className="about-text">Our Barre Classes are full-body workouts where we’ll pulse, plié, and sweat our way through a series of exercises.
No dance experience required!
      </p>
      <Carousel />
    </section>
  )
}

export default AboutSection;