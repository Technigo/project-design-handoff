import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import HeroImage from '../images/header-image.jpg'
import LogoPhone from '../images/phone-logo.svg'
import NavPhone from '../images/hamburger-icon.svg'
import LogoBig from '../images/logo-big.svg'

const StyledHeader = styled.header`

display:flex;
flex-direction: column;
justify-content: space-between;
height:100vh;
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
`

export const Header = () => {
  return (
    <StyledHeader>
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