/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import joinBtn from '../../assets/button-join.svg';
import joinBtnHover from '../../assets/button-join-hover.svg';

const ButtonImage = styled.img`
width: 132px;
`;

const ButtonDiv = styled.div`
display: flex;
height: 54.4%;
align-items: flex-end;
justify-content: flex-end;`

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