import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerButton = styled.button`
    border: none;
    border-radius: 2px;
    height: 30px;
    width: 30px;
    background-color: transparent;
    position: absolute;
    top: 25px;
    right: 20px;
    z-index: 999;
    span {
        height: 3px;
        background-color: #FFFFFF;
        position: relative;
        width: 28px;
        margin: auto;
        display: block;
        border-radius: 4px;
    }
    span::before, span::after {
        content: "";
        height: 3px;
        width: 28px;
        background-color: #FFFFFF;
        position: absolute;
        display: block;
        border-radius: 4px;
    }
    span::after {
        top: calc(100% - 14px);
    }
    span::before {
        top: 10px;
    }
    .active {
        position:absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(45deg);
    }
    .active::before, .active::after {
        position:absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(270deg);
    }

    @media (min-width: 895px) {
        display: none;
}
`
const MenuBackground = styled.div`
    display: ${({ open }) => { return open ? 'block' : 'none' }};
    width: 66vw;
    position: absolute;
    top: 0px;
    right: 0;
    background-color: #000;
    opacity: 85%;
    height: 100vh;
    z-index: 1;

    @media (min-width: 895px) {
        display: none;
}
`
const StyledNav = styled.nav`
    display: flex;
    margin: 90px auto auto 90px;
    flex-direction: column;
    color: white;

    a {
        padding: 18px;
    }
    @media (min-width: 895px) {
        width: auto;
        padding: 0 180px;
        flex-direction: row;
        gap: 5rem;
        height: auto;
        margin: 0;
    }`;

export const Menu = () => {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <HamburgerButton type="button" onClick={() => toggleOpen(!open)}>
        <span />
      </HamburgerButton>
      <MenuBackground open={open}>
        <StyledNav>
          <a>Our Gym</a>
          <a>Workout</a>
          <a>About us</a>
          <a>Contact</a>
        </StyledNav>
      </MenuBackground>
    </>
  )
}