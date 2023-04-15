/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const NavLinks = (props) => {
  return (
    <div>
      <ul>
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
    </div>
  );
}

export default NavLinks;
