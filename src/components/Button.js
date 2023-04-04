/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import joinBtn from '../assets/button-join.svg';
import joinBtnHover from '../assets/button-join-hover.svg';

export const Button = () => {
  const [imageSrc, setImageSrc] = useState({ joinBtn });

  const handleMouseOver = () => {
    setImageSrc(`${joinBtn}`);
  }

  const handleMouseOut = () => {
    setImageSrc(`${joinBtnHover}`);
  }

  return (
    <img
      src={imageSrc}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      alt="button" />
  );
}

