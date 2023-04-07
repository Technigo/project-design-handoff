/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
/* import TopNav from 'components/header/navbar/Navbar'; */
import { Button, ButtonContainer } from 'components/Button'
import HeaderContainer from 'components/Header-container';
import logo from '../Assets/LogoMobile.png';
import jammerImg from '../Assets/Jammer.png';
import Menu from './HamburgerMenu';

const Headline = styled.h1`

  font-family: 'Permanent Marker', cursive;
   display: block;
   flex-direction: column;
   margin-right: auto;
   margin-left: 20%;
  color: white;
  font-size: 48px;
  font-weight: bold; 
@media (min-width: 1024px) {
    font-size: 112px;
    width: 786px;
}
`;

const SecondHeaderText = styled.h2`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 16px;
width: 328px;
padding: 0 24px;
font-size: 24px;
font-weight: 600;
line-height: 27px;
letter-spacing: -0.022em;
color: #FFE600;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);
display:${(props) => (props.mobile ? 'flex' : 'none')};

@media(min-width: 1024px) {
  flex-direction: column;
  display:${(props) => (props.mobile ? 'none' : 'inline-block')};
  width: 583px;
  font-size: 32px;
  font-weight: 300;
  color: #ffffff;
}
`;

const TextOnGreen = styled.p`
max-width: 360px;
padding: 0 24px;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.022em;
display:${(props) => (props.mobile ? 'inline-block' : 'none')};
box-sizing: border - box;
text-shadow: 0px 3.13103px 3.13103px rgba(0, 0, 0, 0.25);

@media(min-width: 1024px) {
  display:${(props) => (props.mobile ? 'none' : 'block')};
  width: 403px;
  font-size: 24px;
  color: #ffffff;
  font-weight: 300;
}
`;

const Highlight = styled.span`
color:#FFE600;
font-weight:500;
`;

const JammerImg = styled.img`
    display: flex;
    width: 30%;
       margin-right: auto;
   margin-left: auto;
    @media (min-width: 1025px) {
    width: 400px;
  padding: 5px 50px 5px 50px;
  margin: 20%;
}`

const Logo = styled.img`
  margin: 30px;
   width: 88px;
    height: 44.77px;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 3.08772px 3.08772px);
    `;

const ParagraphContainer = styled.div`
display:${(props) => (props.mobile ? 'inline-block' : 'none')};
width:100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Button font-size="12px" widht="80px" login>Log In</Button>
      <Menu />
      <Headline>UP YOUR GAME WITH FIT2DERBY!</Headline>
      <SecondHeaderText mobile>Customised online off skate programs
        for roller derby players
      </SecondHeaderText>
      <SecondHeaderText>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derbys
      <Highlight> customised online off skate programs for roller derby players, </Highlight>
        a full time jam will feel like a breeze!
      </SecondHeaderText>
      <TextOnGreen mobile>Choose between our
        <Highlight> individual sign-up </Highlight> and
        <Highlight> Team sign-up </Highlight>
        with exclusive access to our
        <Highlight> Multiplayer Platform </Highlight>
      </TextOnGreen>
      <ParagraphContainer>
        <TextOnGreen> <Highlight> Sign up as an individual </Highlight> if you are looking
          to improve your skills on your own.
        </TextOnGreen>
        <TextOnGreen> Or, <Highlight> sign up as a team </Highlight>
          to access our <Highlight> Multiplayer Platform </Highlight>
          to track your own as well as your team’s progress.
        </TextOnGreen>
      </ParagraphContainer>
      <ButtonContainer>
        <Button fontSize="20px">Individual sign-up</Button>
        <Button fontSize="20px">Join with your team</Button>
      </ButtonContainer>
      <JammerImg src={jammerImg} />
    </HeaderContainer>
  );
};

export default Header;
