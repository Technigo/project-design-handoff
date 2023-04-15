/* eslint-disable max-len */
import React from 'react';
import CircleCheck from './NamedIcons/CircleCheck';
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div className="info-page-wrapper">
      <div className="coach-support">
        <div className="coach-support-text">

          <h1>Personal Coach support and flexibility of Online Training</h1>
          <h3>Your personal Coach</h3>

          <p><CircleCheck />Monitor your progression and technique</p>
          <p><CircleCheck />Keeps you accountable and motivated</p>

          <h3>Online Workout</h3>

          <p><CircleCheck />Save time and resources</p>
          <p><CircleCheck />Fit the sessions into your schedule</p>
          <p><CircleCheck />Never boring</p>
        </div>
        <img src="../assets/stretchguy.jpg" alt="Man stretching" id="man-stretching" />
      </div>

      <div className="workout-plan">
        <div className="workout-plan-text">
          <h1>Your preferred workout and diet plan</h1>

          <p><CircleCheck />We offer various types of workouts</p>
          <p><CircleCheck />Trainings are conducted by certified coaches and tailored according to your personal needs </p>

          <h3>Diet plan</h3>

          <p><CircleCheck />We offer different healthy diets</p>
          <p><CircleCheck />Diet plans are customised according to your health conditions and background</p>
        </div>
        <div className="image-wrapper">
          <img src="../assets/workout.jpg" alt="workout equipment" id="workout-equipment" />
          <img src="../assets/dietplan.png" alt="Healthy dinner" id="healthy-dinner" />
        </div>
      </div>
    </div>
  )
}

export default InfoPage;