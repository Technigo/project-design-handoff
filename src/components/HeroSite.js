import React from 'react'
import styled from 'styled-components'
import { HeadLine3, SubHeadLine3 } from 'components/Typography'
import { NavBar } from './NavBar'
import BackgroundImg from '../images/Hero.png'
import { Button } from './Button'

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
position: absolute;
top: 163px;
left: 16px;
width: 265px;
height: 232px;
display:flex;
flex-direction: column;
justify-content: space-between;

`

export const HeroSite = () => {
  return (
    <StyledHeader>
      <StyledAside />
      <StyledRightAside />
      <NavBar />
      <HeroItem>
        <HeadLine3>
          See new height with Aerial Silks
        </HeadLine3>
        <SubHeadLine3>
          Unleash your inner acrobat with our exhilarating full-body workout.
        </SubHeadLine3>
        <Button textBtn>Sign up today</Button>
      </HeroItem>
    </StyledHeader>

  )
}
