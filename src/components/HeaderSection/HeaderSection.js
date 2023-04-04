import React, { useState } from 'react'
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx'
import { Background } from '../Background'
import { Navbar, Logo, Container, HamburgerIcon, NavbarOptions, NavbarOption } from './Navbar'
import { Hero, Title, SecondaryTitle } from './Hero'
import { Button } from '../Button'
import { Highlight } from '../Highlight'
import { Paragraph } from '../Paragraph'
import { Image } from '../Image'
import logo from '../../images/logo.svg';
import headerBackground from '../../images/headerBackground.svg';
import hero from '../../images/hero.svg';

const Header = styled.header`
height:100%;
width:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const HeaderSection = () => {
  const [show, setShow] = useState(false)
  return (
    <Header>
      <Background src={headerBackground} />
      <Navbar>
        <Logo src={logo} />
        <Container>
          <HamburgerIcon onClick={() => setShow(!show)} show={show}>
            <RxHamburgerMenu style={{ width: '100%', height: '100%' }} />
          </HamburgerIcon>
          <NavbarOptions show={show}>
            <NavbarOption>Our Vision</NavbarOption>
            <NavbarOption>Our Programs</NavbarOption>
            <NavbarOption>Price plans</NavbarOption>
            <NavbarOption>Contact us</NavbarOption>
          </NavbarOptions>

          <Button fontSize="12px" width="80px" height="24px">Log in</Button>
        </Container>
      </Navbar>
      <Hero>
        <Image src={hero} top="50%" width="309.48px" height="298px" />
        <Title>Up your game with fit2Derby!</Title>
        <SecondaryTitle mobile>Customised online off skate programs
          for roller derby players
        </SecondaryTitle>
        <SecondaryTitle>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derby’s
        customised online off skate programs for roller derby players,
        a full time jam will feel like a breeze!
        </SecondaryTitle>
        <Paragraph mobile>Choose between our
          <Highlight> individual sign-up </Highlight> and
          <Highlight> Team sign-up </Highlight>
          with exclusive access to our
          <Highlight> Multiplayer Platform </Highlight>
        </Paragraph>
        <Paragraph>
          <span>Sign up as an individual if you are looking
            to improve your skills on your own.
          </span>
          <span>Or, sign up as a team to access our Multiplayer Platform
to track your own as well as your team’s progress.
          </span>
        </Paragraph>
        <Button fontSize="20px" height="50px">Individual sign-up</Button>
        <Button fontSize="20px" height="50px">Join with your team</Button>
      </Hero>
    </Header>
  )
}