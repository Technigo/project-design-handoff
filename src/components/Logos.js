
import React from 'react';
import styled from 'styled-components';

// Logo style for header in mobile+tablet
const Logo = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;

    img {
        height: 48px;
        padding-top: 13px;
    }
    @media (max-width: 894px) {
        display: flex;
    }
    @media (min-width: 895px) {
        display: none;
    }
`
// Logostyle for footer in tablet
const LogoTab = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        height: 48px;
        padding: 0;
    }
    @media (max-width: 454px) {
        display: none;
    }
    @media (min-width: 455px) {
        display: flex;
    }
    @media (min-width: 895px) {
        display: none;
    }
`
// Logostyle for footer and header in desktop-mode
const LogoDesk = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-bottom: 10px;
    padding-top: 20px;

    h5 {
        margin-left: 10px;
        width: 100px;
    }

    img {
        margin-left: 5px;
        padding: 0;
    }
    @media (max-width: 454px) {
        display: none;
    }
    @media (max-width: 895px) {
        display: none;
    }
     @media (min-width: 895px) {
        display: flex;
    }
`
// Logo for header in mobile+tablet
export const LogoTop = () => {
  return (
    <Logo>
      <img src="./logo/Logo.svg" alt="Logo" />
    </Logo>
  )
}

// Logo footer in tablet
export const LogoIcon = () => {
  return (
    <LogoTab>
      <img src="./logo/Logo.svg" alt="Logo" />
    </LogoTab>
  )
}

// Logo for footer and header in desktop-mode
export const LogoText = () => {
  return (
    <LogoDesk>
      <img src="./logo/Logo.svg" alt="Logo" />
      <h5>Santulan <br />
          Power Yoga <br />
          Stockholm
      </h5>
    </LogoDesk>
  )
}