/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.img`
cursor: pointer;
position: ${(props) => props.position}; 
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
      position={props.position}
      width={props.width}
      left={props.left}
      top={props.top} />
  );
}

