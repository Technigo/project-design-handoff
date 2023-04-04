import React, { useState } from 'react'
import styled from 'styled-components';
import { Background } from '../Background'
import { Navbar, Logo, HamburgerIcon, NavbarOptions, NavbarOption, ContainerNavbar } from './Navbar'
import { Hero, Title, SecondaryTitle, ButtonContainer, ParagraphContainer } from './Hero'
import { Button } from '../Button'
import { Highlight } from '../Highlight'
import { Paragraph } from '../Paragraph'
import { Image } from '../Image'
import logo from '../../images/logo.svg'
import headerBackground from '../../images/headerBackground.svg'
import hero from '../../images/hero.svg'
import hamburger from '../../images/hamburger.svg'

const Header = styled.header`
height:100%;
width:100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
position:relative;
`

export const HeaderSection = () => {
  const [show, setShow] = useState(false)
  return (
    <Header>
      <Background src={headerBackground} />
      <Navbar>
        <Logo src={logo} />
        <ContainerNavbar>
          <HamburgerIcon onClick={() => setShow(!show)} show={show}>
            <img src={hamburger} alt="hamburger icon" />
          </HamburgerIcon>
          <NavbarOptions show={show}>
            <NavbarOption>Our Vision</NavbarOption>
            <NavbarOption>Our Programs</NavbarOption>
            <NavbarOption>Price plans</NavbarOption>
            <NavbarOption>Contact us</NavbarOption>
          </NavbarOptions>

          <Button fontSize="12px" width="80px" login>Log in</Button>
        </ContainerNavbar>
      </Navbar>
      <Hero>
        <Image src={hero} />
        <Title>Up your game with fit2Derby!</Title>
        <SecondaryTitle mobile>Customised online off skate programs
          for roller derby players
        </SecondaryTitle>
        <SecondaryTitle>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derby’s
        <Highlight> customised online off skate programs for roller derby players, </Highlight>
        a full time jam will feel like a breeze!
        </SecondaryTitle>
        <Paragraph mobile>Choose between our
          <Highlight> individual sign-up </Highlight> and
          <Highlight> Team sign-up </Highlight>
          with exclusive access to our
          <Highlight> Multiplayer Platform </Highlight>
        </Paragraph>
        <ParagraphContainer>
          <Paragraph> <Highlight> Sign up as an individual </Highlight> if you are looking
            to improve your skills on your own.
          </Paragraph>
          <Paragraph> Or, <Highlight> sign up as a team </Highlight>
           to access our <Highlight> Multiplayer Platform </Highlight>
to track your own as well as your team’s progress.
          </Paragraph>
        </ParagraphContainer>
        <ButtonContainer>
          <Button fontSize="20px">Individual sign-up</Button>
          <Button fontSize="20px">Join with your team</Button>
        </ButtonContainer>
      </Hero>
    </Header>
  )
}