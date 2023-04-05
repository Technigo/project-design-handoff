/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import joinBtn from '../assets/button-join.svg';
import joinBtnHover from '../assets/button-join-hover.svg';

const ButtonImage = styled.img`
position: absolute;
width: 41.2%;
left: 58.7%;
top: 57.3%;
`;

export const BtnJoin = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <ButtonImage
      src={isHovered ? `${joinBtnHover}` : `${joinBtn}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} />
  );
}