import React, { useState } from 'react'
import { Wrapper, HeroContainer, InnerContainer, TextContainer, ButtonContainer, IconContainer, HeaderDiv } from 'components/styles/Section'
import { Headline1, Tagline, BodyText, Headline5 } from 'components/styles/Text'
import { NavBarTop, NavBarSticky } from 'components/parts/NavBarSticky'
import { Button } from '../styles/Button'
import { Header } from '../styles/Header'
import { ImageHero, Logo, Hamburger } from '../styles/Image'

export const Hero = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const showNavBar = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setNavBarVisible(true)
    } else if (scrolled <= 100) {
      setNavBarVisible(false)
    }
  };

  window.addEventListener('scroll', showNavBar);

  return (
    <Wrapper hero id="#sectionOne" height="812px">
      <ImageHero />
      <Header>
        <Logo src="./assets/easyfit-desktop.png" />
        <Hamburger src="./assets/hamburger.svg" />
        <HeaderDiv>
          <NavBarTop />
          <Button headerBtn>Download App</Button>
        </HeaderDiv>
        {navBarVisible && (
          <NavBarSticky />)}
      </Header>
      <HeroContainer>
        <InnerContainer hero gap="48px">
          <TextContainer hero flexcolumn maxwidth>
            <Tagline hero>FEEL THE DIFFERENCE</Tagline>
            <Headline1>Healthy made easy</Headline1>
            <BodyText white>
              Join us now and try out our 5-30 min
              workouts that will get you motivated.
            </BodyText>
          </TextContainer>
          <ButtonContainer>
            <Button>Download app</Button>
            <Button outlined>Create account</Button>
          </ButtonContainer>
        </InnerContainer>
        <InnerContainer hero>
          <Headline5>Compatible with</Headline5>
          <IconContainer>
            <Logo src="./assets/apple-icon.svg" />
            <Logo src="./assets/roku-icon.svg" />
            <Logo src="./assets/chromecast-icon.svg" />
          </IconContainer>
        </InnerContainer>
      </HeroContainer>
    </Wrapper>
  )
}