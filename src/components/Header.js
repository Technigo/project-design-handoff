import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button.js';

// import logo from '../public/logoLargeOnLightBackground.svg';

const HeaderWrapper = styled.header`
display: flex;
width: 100vw;
height: 64px;
background-color: #F2FDFF;
`

// const LogoImage = styled.img`
// height: 40px;
// `

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <LogoImage src={logo} alt="Logo" /> */}
      <Button>Sign Up!</Button>
    </HeaderWrapper>
  )
}

export default Header;

/* <img src={`${process.env.PUBLIC_URL}/logoLargeOnLightBackground.svg`} alt="Logo" /> */