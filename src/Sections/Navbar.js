import React from 'react';
import styled from 'styled-components';
import Logo from '../Assets/Icons/Logo.svg';
import Search from '../Assets/Icons/Search.svg';
import HamburgerMenuIcon from '../Assets/Icons/Hamburgermenu.svg';

export const Navbar = () => {
  return (
    <NavSection>
      <img className="logo" src={Logo} alt="Santulan Yoga Logo" />
      <img className="search" src={Search} alt="Search Icon" />
      <img className="menu" src={HamburgerMenuIcon} alt="HamburgerMenu Icon" />
    </NavSection>
  )
}

const NavSection = styled.nav`
display: flex;
padding: 16px;

.menu {
  display: flex;
  justify-content: flex-end;
}
`