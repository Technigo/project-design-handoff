import React from 'react';
import './Classes.css';
import Button from 'components/Button.js';

import BarreBasicCardMobile from '../assets/BarreBasicCardMobile.svg';
import BarreBasicCardTabletDesktop from '../assets/BarreBasicCardTabletDesktop.svg';

const Classes = ({ screenSize }) => {
  const imgUrl = screenSize < 667 ? BarreBasicCardMobile : BarreBasicCardTabletDesktop;
  console.log('Barre', screenSize)

  return (
    <div className="classesWrapper">
      <img className="ribbonOnBarreImage" src="../images/PictureFrameHalfPill.svg" alt="Ribbon on barre" />
      <div className="infoWrapper">
        <img className="vectorImage" src="../images/Vector.svg" alt="Vector" />
        <div className="infoSection">
          <h2>Come Sweat It Out at the Barre</h2>
          {/* // eslint-disable-next-line max-len */}
          <p>Our Barre Classes are full-body workouts where we&apos;ll pulse,
                plie, and sweat our way through a series of exercises.
          </p>
          <p className="boldText">No dance experience required!</p>
          {/* <button type="button" className="ourClassesButton">Our Classes</button> */}
          <Button className="button" buttonText="Our Classes" />
          <img className="BarreBasicImage" src={imgUrl} alt="Basic barre class" />
        </div>
      </div>
    </div>
  )
}

export default Classes;