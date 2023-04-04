import React, { useState } from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../assets/hamburger.svg'

const HamburgerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 44px;
  width: 42.86px;
  cursor: pointer;
  margin-top: 4%;
  margin-right: 1rem;
`

const HamburgerImage = styled.img`
  height: 44px;
  width: 42.86px;
`
const Menu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: relative;
  top: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 99;
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerDiv onClick={toggleMenu}>
        <HamburgerImage src={`${hamburgerIcon}`} alt="hamburger menu icon" />
      </HamburgerDiv>
      <Menu isOpen={isOpen}>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </Menu>
    </>
  );
};

