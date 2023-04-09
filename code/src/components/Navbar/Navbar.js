import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { StyledNavbar } from './Navbar.styled';
import desktopLogo from '../images/logo.png';
import mobileLogo from '../images/mobile-logo.png';

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <StyledNavbar>
      <header>
        <img src={desktopLogo} alt="desktop logo" className="desktop-logo" />
        <img src={mobileLogo} alt="mobile logo" className="mobile-logo" />
        <nav ref={navRef}>
          <a href="/#">Pricelist</a>
          <a href="/#">About us</a>
          <a href="/#">Location</a>
          <a href="/#">Contact</a>
          <a href="/#">Sign in</a>
          <button className="nav-btn nav-close-btn" type="button" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" type="button" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </StyledNavbar>
  );
};
