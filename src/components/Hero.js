import React from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import HeroImg from '../images/Hero.png'

const StyledHero = styled.header`
background-color: #D7C3E2;
width: 30%;
height:100%;
display:flex;
`

export const Hero = () => {
  return (
    <StyledHero>
      <NavBar />
      <section className="Hero-item">
        <h1>See new height with Aerial Silks</h1>
        <p>Unleash your inner acrobat with our exhilarating full-body workout.</p>
        <img src={HeroImg} alt="hero" />
      </section>
    </StyledHero>

  )
}
