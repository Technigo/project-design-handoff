/* eslint-disable */
import React from 'react';
import './Class.css';

export const Class = () => {
  return (
    <section className="classes">
      <div className="classesWrapper">
        <img className="rubberband" src="./images/people/rubberband.svg" alt="rubberband on barre" />
        <h2>Come Sweat It Out at the Barre</h2>
        <p>Our Barre Classes are full-body workouts where we&apos;ll pulse,</p>
        <p>plié, and sweat our way through a series of exercises.</p>
        <p><strong> No dance experience required!</strong></p>
        <button className="classBtn" type="button">Our Classes</button>
      </div>
    </section>
  );
}