import React from 'react';
import styled from 'styled-components';

const HamburgerIcon = styled.svg`
background-color: transparent;
`

const HamburgerMenu = () => {
  return (
    <HamburgerIcon svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_66_1732)">
        <path d="M0.833252 4.0332H39.1666" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M0.833252 20H39.1666" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M0.833252 35.9668H39.1666" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_66_1732">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </HamburgerIcon>

  );
}

export default HamburgerMenu;