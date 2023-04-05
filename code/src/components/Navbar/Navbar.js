import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>Logo</h3>
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
  );
};
