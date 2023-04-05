import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
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

h1, h2 {
  font-size: 3rem;
  color: #FF90D1;
  margin: 0;
}

section {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-self: center;
  margin-bottom: 108px;
}

@media (min-width: 570px) {
  h1, h2 {
    font-size: 6rem;
  }

  section {
    margin-left: 24px;
    align-self: unset;
  }
}

  @media (min-width: 769px) {
    background-image: none;

    section {
      position: fixed;
      bottom: 0;
    }

    nav {
      position: fixed;
      width: 100%;
      justify-content: unset;
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
  width: 45%;
  align-self: center;
}
`
const MediaDesktop = styled.video`
@media (max-width: 768px) {
  display:none
}

@media (min-width: 769px) {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
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
          <h1>OUTDOOR</h1>
          <h2>WORKOUT</h2>
        </div>
        <Button />
      </section>
    </StyledHeader>
  )
}