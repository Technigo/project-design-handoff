import React from 'react'
import './HeroBoxCss.css'

const HeroBox = () => {
  return (
    <section className="big-field-hero">
      <div className="hero-text-container">
        <h1 className="header-hero">
        YOUR <br /> WORKOUT <br /> YOUR <br /> TIME <br />
        TOGETHER
        </h1>
        <p className="paragraph-hero">
            Find the activity that suits you and buddy.
            No matter the amount of time you have
            to spare, we have you covered.
            Get started at your personal level.
        </p>
        <div className="button-box">
          <button type="button" className="button-footer primary">Get started
          </button>
          <button type="button" className="button-footer brighter">Download App
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroBox