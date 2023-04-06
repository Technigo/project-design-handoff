/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const handleButtonClick = () => {
  alert('Thank you for trying Self Health!');
};

const NavLinks = (props) => {
  return (
    <><ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="menu-item" href="#services">Services</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="menu-item" href="#about">Coaches</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="menu-item" href="#contact">About</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="menu-item" href="#shop">Shop</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a className="menu-item" href="#club">Club</a>
      </li>
    </ul>

    <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>
    </>
  );
}

export default NavLinks;
