/* eslint-disable max-len */
import React from 'react';
import CircleCheck from './NamedIcons/CircleCheck';

const InfoPage = () => {
  return (
    <>
      <h1>Personal Coach support and flexibility of Online Training</h1>
      <h3>Your personal Coach</h3>

      <p><CircleCheck />Monitor your progression and technique</p>
      <p><CircleCheck />Keeps you accountable and motivated</p>

      <h3>Online Workout</h3>

      <p><CircleCheck />Save time and resources</p>
      <p><CircleCheck />Fit the sessions into your schedule</p>
      <p><CircleCheck />Never boring</p>

      <img src="../assets/stretchguy.jpg" alt="Man stretching" style={{ maxWidth: '50vw' }} />

      <h1>Your preferred workout and diet plan</h1>

      <p><CircleCheck />We offer various types of workouts</p>
      <p><CircleCheck />Trainings are conducted by certified coaches and tailored according to your personal needs </p>

      <h3>Diet plan</h3>

      <p><CircleCheck />We offer different healthy diets</p>
      <p><CircleCheck />Diet plans are customised according to your health conditions and background</p>

      <img src="../assets/workout.jpg" alt="workout equipment" style={{ maxWidth: '50vw' }} />
      <img src="../assets/dietplan.png" alt="Healthy dinner" style={{ maxWidth: '50vw' }} />

    </>
  )
}

export default InfoPage;