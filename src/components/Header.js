import React from 'react'
import styled from 'styled-components'
import { StyledButtonHeader } from './Button'
import { Headline1, Headline2 } from './Typography'
import HeroImage from '../images/header-image.jpg'
import LogoPhone from '../images/phone-logo.svg'
import NavPhone from '../images/hamburger-icon.svg'
import LogoBig from '../images/logo-big.svg'
import HeroVideo from '../images/hero-video.mp4'

const StyledHeader = styled.header`

display:flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
background-image: url(${HeroImage});
background-size: cover;
background-position: 75% 20%;

nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 16px 0 16px;
}

section {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-self: center;
  margin-bottom: 108px;
  padding: 0 16px;
}

@media (min-width: 570px) {
  section {
    margin-left: 24px;
    align-self: unset;
  }
}

  @media (min-width: 769px) {
    background-image: none;

    section {
      position: absolute;
      bottom: 0;
    }

    nav {
      position: absolute;
      width: 100%;
    }
  }
`
const PhoneNavMedia = styled.img`
  @media (min-width: 570px){
    display: none;
}
`

const TabletNavMedia = styled.img`
@media (max-width: 569px){
  display: none;
}

@media (min-width: 570px) {
  width: 159px;
}
`
const TabletNavList = styled.ul`
@media (max-width: 569px){
  display: none;
}

@media (min-width: 570px) {
  display: flex;
  width: 80%;
  justify-content: space-around;
  list-style: none;
  font-weight: 400;
  font-size: 1rem;
}

@media (min-width: 769px) {
  width: 65%;
  align-self: center;
  margin: auto;
  font-size: 1.5rem;
}
`
const MediaDesktop = styled.video`
@media (max-width: 768px) {
  display:none
}

@media (min-width: 769px) {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100vh;
  min-height: 100vh;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
`

export const Header = () => {
  return (
    <StyledHeader>
      <MediaDesktop src={HeroVideo} autoPlay muted loop />
      <nav>
        <PhoneNavMedia
          src={LogoPhone}
          alt="logo with a tree" />
        <PhoneNavMedia
          src={NavPhone}
          alt="logo with a tree" />
        <TabletNavMedia img src={LogoBig} alt="logo with a tree" />
        <TabletNavList>
          <li>Pricelist</li>
          <li>About Us</li>
          <li>Location</li>
          <li>Contact</li>
          <li>Sign in</li>
        </TabletNavList>
      </nav>
      <section>
        <div>
          <Headline1>
            OUTDOOR
          </Headline1>
          <Headline2>
            WORKOUT
          </Headline2>
        </div>
        <StyledButtonHeader>
          <p>Join us today!</p>
        </StyledButtonHeader>
      </section>
    </StyledHeader>
  )
}