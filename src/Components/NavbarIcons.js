import React from 'react';
import styled from 'styled-components';
import Search from '../Assets/Icons/Search.svg';
import HamburgerMenuIcon from '../Assets/Icons/Hamburgermenu.svg';

export const NavbarIcons = () => {
  return (
    <NBI>
      <img className="search" src={Search} alt="Search Icon" />
      <HamIcon>
        <img className="menu" src={HamburgerMenuIcon} alt="HamburgerMenu Icon" />
      </HamIcon>
    </NBI>
  )
}

const NBI = styled.div`
display: flex;
gap: 34px;
padding-right: 20px;
justify-content: flex-end;

img {
  cursor: pointer;
}
`

const HamIcon = styled.div`
display: flex;

@media (min-width: 1023px) {
  display: none;
}
`