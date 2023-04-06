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

  @media (min-width: 570px) {
    display: none;
  }
`;

const HeaderLogoFull = styled.img`
  @media (min-width: 570px) {
    width: 180px;
    height: 77px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const UlElements = styled.ul`
  display: flex;

  @media (max-width: 569px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

  @media (min-width: 570px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LiElements = styled.li`
  list-style-type: none;
  margin: 3px;

  a {
    display: block;
    padding: 10px;
    color: var(--neutral-dark);
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid var(--neutral-dark);

    &:hover {
      text-decoration: underline 3px var(--primary-color-4);
    }
  }

  @media (min-width: 570px) {
    display: flex;
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 569px) {
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
  @media (max-width: 569px) {
    display: flex;
    justify-content: center;
    position: fixed;
    right: 0;
    width: 40%;
    min-height: 60vh;
    overflow: hidden;
    background-color: var(--neutral-light);
    z-index: 9;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 570px) {
    display: none;
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
    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <StyledNavBar>
      <HeaderLogo
        src={`${process.env.PUBLIC_URL}/assets/logo-img.png`}
        alt="Logo for Cross Park" />
      <HeaderLogoFull
        src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
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