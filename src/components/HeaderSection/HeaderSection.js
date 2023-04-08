import React, { useState } from 'react'
// import { Background } from '../styledComponents/Backgrounds'
import { Navbar, Logo, HamburgerIcon, NavbarOptions, NavbarOption, ContainerNavbar } from './Navbar'
import { Hero, Title, SecondaryTitle, ButtonContainer, ParagraphContainer, SecondaryTitleHidden } from './Hero'
import { Button } from '../styledComponents/Button'
import { Highlight } from '../styledComponents/Highlight'
import { Paragraph, ParagraphHidden } from '../styledComponents/Texts'
import { Image } from '../styledComponents/Images'
import logo from '../../images/logo.svg'
// import headerBackground from '../../images/headerBackground.svg'
import hero from '../../images/hero.svg'
import hamburger from '../../images/hamburger.svg'
import { FlexContainer } from '../styledComponents/Containers'

export const HeaderSection = () => {
  const [show, setShow] = useState(false)
  return (
    <FlexContainer background="#045661" padding="5%" main>
      <Image src={hero} />
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

          <Button fontSize="0.8em" width="80px" login>Log in</Button>
        </ContainerNavbar>
      </Navbar>
      <Hero>
        <Title>Up your game with fit2Derby!</Title>
        <SecondaryTitleHidden>Customised online off skate programs
          for roller derby players
        </SecondaryTitleHidden>
        <SecondaryTitle>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derby’s
        <Highlight cta> customised online off skate programs for roller derby players, </Highlight>
        a full time jam will feel like a breeze!
        </SecondaryTitle>
        <ParagraphHidden visible>Choose between our
          <Highlight cta> individual sign-up </Highlight> and
          <Highlight cta> Team sign-up </Highlight>
          with exclusive access to our
          <Highlight cta> Multiplayer Platform </Highlight>
        </ParagraphHidden>
        <ParagraphContainer>
          <Paragraph> <Highlight cta> Sign up as an individual </Highlight> if you are looking
            to improve your skills on your own.
          </Paragraph>
          <Paragraph> Or, <Highlight cta> sign up as a team </Highlight>
           to access our <Highlight cta> Multiplayer Platform </Highlight>
to track your own as well as your team’s progress.
          </Paragraph>
        </ParagraphContainer>
        <ButtonContainer>
          <Button fontSize="1.25em">Individual sign-up</Button>
          <Button fontSize="1.25em">Join with your team</Button>
        </ButtonContainer>
      </Hero>
    </FlexContainer>
  )
}