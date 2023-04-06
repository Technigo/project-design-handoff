import React from 'react';
import styled from 'styled-components';
/* import TopNav from 'components/header/navbar/Navbar'; */
import Button from 'components/Button'
import HeaderContainer from 'components/Header-container';
import logo from '../Assets/LogoMobile.png';
import jammerImg from '../Assets/Jammer.png';
import Menu from './HamburgerMenu';

const Headline = styled.h1`

h1 {
   font-family: 'Permanent Marker', cursive;
   display: block;
   flex-direction: column;
   margin-right: auto;
   margin-left: 20%;
   font-size: 40px;
}
`;

const Headertext = styled.p`
//add styleing to yellow test section
//add Headertext in header

`

const JammerImg = styled.img`
img {
    display: flex;
    width: 30%;
       margin-right: auto;
   margin-left: auto;
    @media (min-width: 1025px) {
    width: 400px;
  padding: 5px 50px 5px 50px;
  margin: 20%;
    }
}`

const Logo = styled.img`
    margin: 30px;
    `;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Button>SIGN IN</Button>
      <Menu />
      <Headline>
        <h1>UP YOUR GAME WITH FIT2DERBY!</h1>
      </Headline>
      <JammerImg src={jammerImg} />
    </HeaderContainer>
  );
};

export default Header;
