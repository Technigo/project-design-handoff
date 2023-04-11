import React, { useState, useRef, useEffect } from 'react';
import {
  StyledNavBar,
  HeaderLogo,
  HeaderLogoFull,
  UlElements,
  LiElements,
  ToggleButton,
  CloseIcon,
  MenuIcon,
  MenuNav
} from './Navbar.styled';
import smallLogo from '../../assets/mobile-logo.png';
import bigLogo from '../../assets/logo.png';
import xIcon from '../../assets/x.png';
import hamburgerIcon from '../../assets/hamburger-icon.png';

export const NavBar = () => {
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
      <HeaderLogo src={smallLogo} alt="Logo for Cross Park" />
      <HeaderLogoFull src={bigLogo} alt="Logo for Cross Park" />
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon src={xIcon} alt="Logo that says sign up" />
        ) : (
          <MenuIcon src={hamburgerIcon} alt="Logo that says sign up" />
        )}
      </ToggleButton>
      <MenuNav ref={navRef} isOpen={isOpen}>
        <UlElements>
          <LiElements>
            <a href="#!">Pricelist</a>
          </LiElements>
          <LiElements>
            <a href="#!">About us</a>
          </LiElements>
          <LiElements>
            <a href="#!">Location</a>
          </LiElements>
          <LiElements>
            <a href="#!">Contact</a>
          </LiElements>
          <LiElements>
            <a href="#!">Sign in</a>
          </LiElements>
        </UlElements>
      </MenuNav>
    </StyledNavBar>
  );
};
