import React from 'react';
import './Classes.css';
import PrimaryButtonLarge from 'components/PrimaryButtonLarge.js';

import BarreBasicCardMobile from '../assets/BarreBasicCardMobile.svg';
import BarreBasicCardTabletDesktop from '../assets/BarreBasicCardTabletDesktop.svg';

const Classes = ({ screenSize }) => {
  const imgUrl = screenSize < 667 ? BarreBasicCardMobile : BarreBasicCardTabletDesktop;
  console.log('Barre', screenSize)

  return (
    <div className="classesWrapper">
      <img className="ribbonOnBarreImage" src="../images/PictureFrameHalfPill.svg" alt="Ribbon on barre" />
      <div className="infoWrapper">
        <div className="backgroundImage">
          <img className="whiteBackgroundMobile" src="../images/WhiteBackgroundMobile.svg" alt="White background shape" />
          <img className="whiteBackgroundTablet" src="../images/WhiteBackgroundTablet.svg" alt="White background shape" />
          <img className="whiteBackgroundDesktop" src="../images/WhiteBackgroundDesktop.svg" alt="White background shape" />
        </div>
        <div className="infoSection">
          <h2>Come Sweat It Out at the Barre</h2>
          {/* // eslint-disable-next-line max-len */}
          <p>Our Barre Classes are full-body workouts where we&apos;ll pulse,
                plie, and sweat our way through a series of exercises.
          </p>
          <p className="boldText">No dance experience required!</p>
          {/* <button type="button" className="ourClassesButton">Our Classes</button> */}
          <PrimaryButtonLarge className="primaryButtonLarge" buttonText="Our Classes" />
          <img className="barreBasicImage" src={imgUrl} alt="Basic barre class" />
        </div>
      </div>
    </div>
  )
}

export default Classes;