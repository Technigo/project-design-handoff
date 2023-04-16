import React from 'react';
import iphoneMockUp from '../assets/images/iphone.png';

const Application = () => {
  return (
    <section>
      <div className="title-container">
        <h3>ACTIVITY</h3>
        <h2>Track you activity & celebrate your progress</h2>
      </div>
      <div>
        <img src={iphoneMockUp} alt="iphone" />
      </div>
      <div className="horizontal-scroll-wrapper">
        <div className="milestones">
          <h2>Milestones</h2>
          <p>
            Don’t have any personal goals yet? Challenge yourself by completing
            our pre-made milestones that definitley will keep you motivated
          </p>
        </div>
        <div className="stats">
          <h2>Stats</h2>
          <p>View your general stats and keep track of your achievments</p>
        </div>

        <div className="schedule">
          <h2>Schedule</h2>
          <p>
            Schedule and monitor all your workouts in the calender and set up a
            personal reminder to keep you going
          </p>
        </div>
        <div className="personal">
          <h2>Personal</h2>
          <p>
            Track any personal fitness activities you accomplish by adding them
            you your calender
          </p>
        </div>
      </div>
    </section>
  );
};

export default Application;
