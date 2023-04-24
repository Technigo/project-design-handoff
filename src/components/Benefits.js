/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Benefits.css'
import { PrimaryBtn } from 'components/Button'

const Benefits = () => {
  return (
    <section className="benefits-box">
      <div className="benefits-intro">
        <p>BENEFITS</p>
        <h1>Healthy doesn't have to be hard. We make it easy</h1>
      </div>
      <div className="cards">
        <img className="card-image-1" src="../images/anastasia-hisel-oP3BODek8Fc-unsplash.jpg" alt="workout" />
        <div className="card-text">
          <h2>Apartment friendly workouts</h2>
          <p>No matter where you are or the size of your space, we got a class for you.</p>
        </div>
      </div>
      <div className="cards">
        <img className="card-image-2" src="../images/jonathan-borba-1cM5f-uhB34-unsplash.jpg" alt="workout" />
        <div className="card-text">
          <h2>Structured workout programs</h2>
          <p>We've got different programs for all levels & result to suit everyone.</p>
        </div>
      </div>
      <div className="cards">
        <img className="card-image-3" src="../images/madison-lavern-4gcqRf3-f2I-unsplash.jpg" alt="workout" />
        <div className="card-text">
          <h2>Designed to keep you focused</h2>
          <p>Track your activity & earn badges for completing workouts.</p>
        </div>
      </div>
      <div className="cards">
        <img className="card-image-4" src="../images/brooke-lark-nBtmglfY0HU-unsplash.jpg" alt="workout" />
        <div className="card-text">
          <h2>Healthy recipies & more</h2>
          <p>Search among our recipies & get inspired for a healthy inside.</p>
        </div>
      </div>
      <PrimaryBtn className="benefitsBtn">Download app</PrimaryBtn>
    </section>
  )
}

export default Benefits
