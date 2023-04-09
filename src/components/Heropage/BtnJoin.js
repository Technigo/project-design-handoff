/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import joinBtn from '../../assets/button-join.svg';
import joinBtnHover from '../../assets/button-join-hover.svg';
import { ButtonDiv, ButtonImage } from './HeropageCSS';

export const BtnJoin = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <ButtonDiv>
      <ButtonImage
        src={isHovered ? `${joinBtnHover}` : `${joinBtn}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} />
    </ButtonDiv>
  );
}