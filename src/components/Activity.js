/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Activity.css'

const Activity = () => {
  return (
    <section className="activity-box">
      <div className="activity-intro">
        <p>ACTIVITY</p>
        <h1>Track your activity & celebrate your progress</h1>
      </div>
      <img className="phone-img" src="../images/mobileapp.png" alt="img" />
      <div className="text-wrapper">
        <h2>Milestones</h2>
        <p>Don't have any personal goals yet? Challenge yourself by completing our
          pre-made milestones that definitely will keep you motivated
        </p>
      </div>
      <div className="text-wrapper">
        <h2>Schedule</h2>
        <p>Schedule and monitor all your workouts in the calender and set up
          a personal reminder to keep you going
        </p>
      </div>
      <div className="text-wrapper">
        <h2>Stats</h2>
        <p>View your general stats and keep track of your achievments</p>
      </div>
      <div className="text-wrapper">
        <h2>Personal</h2>
        <p>Track any personal fitness activities you accomplish by adding them to your calender</p>
      </div>
    </section>
  )
}

export default Activity