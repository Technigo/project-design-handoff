import React from 'react'
import './AchieveTopCss.css'
import Run from '../assets/run.svg'
import Ball from '../assets/ball.svg'
import Swim from '../assets/swim.svg'
import Yoga from '../assets/yoga.svg'
import Walks from '../assets/walks.svg'
import Balance from '../assets/balance.svg'

const AchieveTop = () => {
  return (
    <section className="achievetop-container">
      <div className="text-button-box">
        <h1 className="header-achieve">
        FIND ACTIVITIES <br /><span className="header-achieve-size">YOUR STYLE</span>
        </h1>
        <button type="button" className="button-achieve primary">Get started
        </button>
      </div>
      <div className="cards-box">
        <img
          src={Run}
          alt="Card run"
          className="card-image" />
        <img
          src={Ball}
          alt="Card run"
          className="card-image" />
        <img
          src={Swim}
          alt="Card run"
          className="card-image" />
        <img
          src={Yoga}
          alt="Card run"
          className="card-image" />
        <img
          src={Walks}
          alt="Card run"
          className="card-image" />
        <img
          src={Balance}
          alt="Card run"
          className="card-image" />
      </div>
    </section>
  )
}

export default AchieveTop