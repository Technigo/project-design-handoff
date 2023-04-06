import React from 'react';

const SecondSection = () => {
  return (
    <section className="second-section-container">
      <div className="join-us-container">
        <p className="join-us-paragraph">Join our full-body workout inspired by ballet, pilates and yoga.</p>
        <button className="primary-button" type="button">Join Us!</button>
      </div>
      <div>image goes here</div>
      <div className="come-sweat-container">
        <h1 className="h1-second-section">Come Sweat It Out at the Barre</h1>
        <p className="second-section-paragraph">
        Our barre classes are full-body workouts where we&apos;ll pulse, plié, and sweat
        our way through a series of exercises.
          <br />
          <span className="span-bolder">No dance experience required!</span>
        </p>
        <button className="primary-button" type="button">Our classes button?</button>
      </div>
      <p>... Image carousel goes here ...</p>
    </section>
  );
}

export default SecondSection;

// eslint-disable-next-line max-len
// <img className="second-section-image" src="/assets/barre-with-rubber-bands.png" alt="barre with rubber bands" />