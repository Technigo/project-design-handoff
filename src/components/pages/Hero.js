import React, { useState } from 'react'
import { Wrapper, OuterContainer, InnerContainer, TextContainer, ButtonContainer, IconContainer } from 'components/styles/Section'
import { Headline1, Tagline, BodyText, Headline5 } from 'components/styles/Text'
import { Button, ButtonOutlined } from '../styles/Button'
import { Header, NavWhite, NavBlack, NavLink, HeaderDiv, Hamburger } from '../styles/Header'
import { ImageHero, Logo } from '../styles/Image'

export const Hero = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setNavBar(true)
    } else if (scrolled <= 100) {
      setNavBar(false)
    }
  };

  window.addEventListener('scroll', toggleNavBar);

  return (
    <Wrapper hero>
      <ImageHero />
      <Header>
        <Logo src="./assets/easyfit-desktop.png" />
        <Hamburger src="./assets/hamburger.svg" />
        <HeaderDiv>
          {navBar ? (
            <NavBlack>
              <NavLink href="/" width="57.484px">Benefits</NavLink>
              <NavLink href="/" width="65.984px">Workouts</NavLink>
              <NavLink href="/" width="53.039px">Activity</NavLink>
              <NavLink href="/" width="79.414px">Community</NavLink>
            </NavBlack>)
            : (
              <NavWhite>
                <NavLink href="/" whitenav width="57.484px">Benefits</NavLink>
                <NavLink href="/" whitenav width="65.984px">Workouts</NavLink>
                <NavLink href="/" whitenav width="53.039px">Activity</NavLink>
                <NavLink href="/" whitenav width="79.414px">Community</NavLink>
              </NavWhite>)}
          <Button headerBtn>Download App</Button>
        </HeaderDiv>
      </Header>
      <OuterContainer absolute hero flexcolumn gap="70px">
        <InnerContainer flexcolumn gap="48px">
          <TextContainer flexcolumn maxwidth>
            <Tagline hero>FEEL THE DIFFERENCE</Tagline>
            <Headline1>Healthy made easy</Headline1>
            <BodyText white>
              Join us now and try out our 5-30 min
              workouts that will get you motivated.
            </BodyText>
          </TextContainer>
          <ButtonContainer>
            <Button>Download app</Button>
            <ButtonOutlined>Create account</ButtonOutlined>
          </ButtonContainer>
        </InnerContainer>
        <InnerContainer flexcolumn>
          <Headline5>Compatible with</Headline5>
          <IconContainer>
            <Logo src="./assets/apple-icon.svg" />
            <Logo src="./assets/roku-icon.svg" />
            <Logo src="./assets/chromecast-icon.svg" />
          </IconContainer>
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}