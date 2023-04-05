/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';

// const Button = styled.img`
// position: absolute;
// width: 41.2%;
// left: 58.7%;
// top: 57.3%;
// `;

const Button = styled.img`
position: absolute;
width: ${(props) => props.width};
left: ${(props) => props.left};
top: ${(props) => props.top};
`;

export const ButtonHover = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Button
      src={isHovered ? `${props.btnOnHover}` : `${props.btn}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      width={props.width}
      left={props.left}
      top={props.top} />
  );
}

