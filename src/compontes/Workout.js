import React from 'react';

const Workout = () => {
  return (
    <section className="workout-container">
      <div className="title-container">
        <h3>WORKOUTS</h3>
        <h2>One 5 min workout is better than none.</h2>
      </div>
      <div className="workout-box-container">
        <div className="box strech">
          <div>
            <h2>5 min warm up</h2>
            <p>For at home or the gym</p>
          </div>
          <div>
            <button type="button">View more</button>
          </div>
        </div>
        <div className="box">
          <h1>Healthy made easy</h1>
          <p>
            Choose a workout or try out any of our weekly challenges. All our
            exercises range between 5 to 30 min. Each exercise is accompanied by
            a detailed written description and video to help you understand and
            perfect each move.
          </p>
        </div>
        <div className="box">
          <h2>AB workouts</h2>
          <p>For at home or the gym</p>
        </div>
        <div className="box">
          <h2>Cardio workouts</h2>
          <p>And so much more...</p>
        </div>
      </div>
    </section>
  );
};

export default Workout;
