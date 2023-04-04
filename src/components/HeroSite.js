import React from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import BackgroundImg from '../images/Hero.png'

const StyledHeader = styled.header`
width: 100vw;
height: 577px;
display: flex;
`
const StyledAside = styled.aside`
background-color: #D7C3E2;
width: 33vw;
height: 577px;
display: flex 1;
padding-left: 16px;
`
const StyledRightAside = styled.aside`
 background-image: url(${BackgroundImg});
 height: 577px;
 width: 67vw;
 background-size: cover;
 background-position: center;
 display: flex 2;
 padding-right: 16px;
 `

const HeroItem = styled.div`
border: solid black 1px;
position: absolute;
top: 163px;
left: 16px;
width: 265px;
font-size:
`
const StyledH1 = styled.h1`
font-weight: 500px;
`

const StyledP = styled.p`
font-weight: 500px;
`

export const HeroSite = () => {
  return (
    <StyledHeader>
      <StyledAside />
      <StyledRightAside />
      <NavBar />
      <HeroItem>
        <StyledH1>See new height with Aerial Silks</StyledH1>
        <StyledP>Unleash your inner acrobat with our exhilarating full-body workout.</StyledP>
      </HeroItem>
    </StyledHeader>

  )
}
