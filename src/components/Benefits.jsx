/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Benefits.css';
import selfcare from '../icons/self-care.png'
import meditation from '../icons/meditation.png'
import volunteering from '../icons/volunteering.png'

export const Benefits = () => {
  return (
    <div className="benefits-background">
      <h1 className="benefits-text">Ready to prioritize your well-being?</h1>
      <div className="benefits-cards">
        <div className="promotion-card">
          <img src={selfcare} alt="selfcare" />
          <h3 className="card-title">Whether you're looking to reduce stress, improve your flexibility or build strength - there's a yoga class for you.</h3>
        </div>
        <div className="promotion-card">
          <img src={meditation} alt="selfcare" />
          <h3 className="card-title">No matter where you are or what your schedule looks like, this wellness program is here for you</h3>
        </div>
        <div className="promotion-card">
          <img src={volunteering} alt="selfcare" />
          <h3 className="card-title">Get a nutrient-rich diet with  recipes and meal plans for informed nutrition decisions from our experts.</h3>
        </div>
      </div>
    </div>
  )
}