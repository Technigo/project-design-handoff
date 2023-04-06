import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const UlElements = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LiElements = styled.li`
  list-style-type: none;
  margin: 3px;

  a {
    display: block;
    padding: 10px;
    color: var(--neutral-dark);
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 10;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: var(--neutral-dark);
`;

const MenuIcon = styled(FaBars)`
  color: var(--neutral-dark);
`;

const MenuNav = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    right: 0;
    width: 35%;
    min-height: 60vh;
    overflow: hidden;
    background-color: var(--neutral-light);
    z-index: 9;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavBar = ({ navOne, navTwo, navThree, navFour, navFive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <StyledNavBar>
      <HeaderLogo
        src={`${process.env.PUBLIC_URL}/assets/logo-img.png`}
        alt="Logo for Cross Park" />
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </ToggleButton>
      {isOpen && (
        <MenuNav ref={navRef}>
          <UlElements>
            <LiElements>
              <a href="#!">{navOne}</a>
            </LiElements>
            <LiElements>
              <a href="#!">{navTwo}</a>
            </LiElements>
            <LiElements>
              <a href="#!">{navThree}</a>
            </LiElements>
            <LiElements>
              <a href="#!">{navFour}</a>
            </LiElements>
            <LiElements>
              <a href="#!">{navFive}</a>
            </LiElements>
          </UlElements>
        </MenuNav>
      )}
    </StyledNavBar>
  );
};