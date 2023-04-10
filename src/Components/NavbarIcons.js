import React from 'react';
import styled from 'styled-components';
import Search from '../Assets/Icons/Search.svg';
import HamburgerMenuIcon from '../Assets/Icons/Hamburgermenu.svg';

export const NavbarIcons = () => {
  return (
    <NBI>
      <img className="search" src={Search} alt="Search Icon" />
      <img className="menu" src={HamburgerMenuIcon} alt="HamburgerMenu Icon" />
    </NBI>
  )
}

const NBI = styled.div`
display: flex;
gap: 34px;
justify-content: flex-end;
`