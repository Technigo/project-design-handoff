import React from 'react'
import { Button } from './Button'
import './SocialProofCss.css'

const SocialProof = () => {
  return (
    <section className="social-proof-container">
      <div className="proof-text-container">
        <h3 className="header-proof">CO-CREATED WITH 100+  <br />
          <span className="habits-text-size2">WORLD RENOWNED HEALTH EXPERTS </span>
        </h3>
        <p className="proof-paragraph">
            Our concept and workouts have been developed
            to fit you and your dog by some of the worlds
            most experienced trainers, physiotherapists,
            and health experts. Specialists both in dogs
            and humans. We aim to give you the best experience
            and for knowledge and understanding to grow.
        </p>
      </div>
      <Button className="button-social-proof"> Find out more </Button>
    </section>
  )
}

export default SocialProof