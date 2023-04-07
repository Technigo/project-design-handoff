import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerButton = styled.button`
    border: none;
    border-radius: 2px;
    height: 30px;
    width: 30px;
    background-color: #000;
    position: absolute;
    top: 20px;
    right: 20px;
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
    @media (min-width: 1025px) {
        display: none
}
`
const MenuBackground = styled.div`
    width: 66vw;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #000;
    opacity: 75%;
    height: 100vw;
    @media (min-width: 1025px) {
        width: auto;
        height: auto;
}
`
const StyledNav = styled.nav`
    display: flex;
    margin: 90px auto auto 45px;
    flex-direction: column;
    @media (min-width: 1025px) {
        width: auto;
        padding: 35px 60px;
        flex-direction: row;
        height: auto;
        margin: 0;
}
`
export const Menu = () => {
  return (
    <MenuBackground>
      <HamburgerButton type="button">
        <span className="poooop" />
      </HamburgerButton>
      <StyledNav>
        <a>Our Gym</a>
        <a>Workout</a>
        <a>About us</a>
        <a>Contact</a>
      </StyledNav>
    </MenuBackground>
  )
}
