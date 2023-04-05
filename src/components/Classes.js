import React from 'react';
import './Classes.css';

const Classes = () => {
  return (
    <div className="classesWrapper">
      <img className="ribbonOnBarreImage" src="../images/PictureFrameHalfPill.svg" alt="Ribbon on barre" />
      <img className="vectorWhite" src="../images/Vector.svg" alt="Vector" />
      <h2>Come Sweat It Out at the Barre</h2>
      {/* // eslint-disable-next-line max-len */}
      <p>Our Barre Classes are full-body workouts where we&apos;ll pulse,
         plie, and sweat our way through a series of exercises.
      </p>
      <p>No dance experience required!</p>
      <button type="button" className="ourClassesButton">Our Classes</button>

    </div>

  )
}

export default Classes;