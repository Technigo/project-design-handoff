import React from 'react';

const Application = () => {
  return (
    <section>
      <div className="title-container">
        <h3>ACTIVITY</h3>
        <h2>Track you activity & celebrate your progress</h2>
      </div>
      <div className="colum-one">
        <div>
          <h2>Milestones</h2>
          <p>
            Don’t have any personal goals yet? Challenge yourself by completing
            our pre-made milestones that definitley will keep you motivated
          </p>
        </div>
        <div>
          <h2>Stats</h2>
          <p>View your general stats and keep track of your achievments</p>
        </div>
      </div>
      <div className="colum-two">
        <img alt="some-img" />
      </div>
      <div className="colum-three">
        <div>
          <h2>Schedule</h2>
          <p>
            Schedule and monitor all your workouts in the calender and set up a
            personal reminder to keep you going
          </p>
        </div>
        <div>
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
