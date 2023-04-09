import React from 'react'
import './HealthyHabitsCss.css'
import Tick from '../assets/tick.svg'

const HealthyHabits = () => {
  return (
    <section className="habits-container">
      <div className="habits-text-container">
        <h3 className="header-habits">BUILD HEALTHY HABITS <br />
          <span className="habits-text-size1">FOR YOU AND YOUR DOG</span>
        </h3>
      </div>
      <ul className="habits-list">
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Work your mind, body, have fun and develop amazing skills together.
        </li>
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Get the most out of your time together every day.
        </li>
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Levels from beginner to advanced dog owner/puppy to old dog.
        </li>
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Online workouts and programs.
        </li>
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Research based training.
        </li>
        <li className="habits-paragraph">
          <img
            src={Tick}
            alt="Tick sign"
            className="tick-sign" />Experienced coaches.
        </li>
      </ul>
    </section>
  )
}

export default HealthyHabits