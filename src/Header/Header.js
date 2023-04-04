import React from 'react';
import styled from 'styled-components';
import './Header.css';

const Logo = styled.img`
  width: 55px;
  height: 55px;
`

const HamburgerIcon = styled.img`
  border: none;
`;

const Header = () => {
  return (
    <section className="navbar-container">
      <div className="logo-container">
        <Logo src="/icons/Vector.png" />
      </div>
      <div className="hamburger-container">
        <HamburgerIcon src="./icons/hamburgermenu.png" />
      </div>
    </section>
  );
};

export default Header;

