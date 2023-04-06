import React from 'react'
import styled from 'styled-components'
import { HeadLine, SubHeadLine } from 'components/Typography'
import { NavBar } from './NavBar'
import BackgroundImg from '../images/Hero.png'
import { Button } from './Button'

const StyledHeader = styled.header`
width: 100vw;
height: 577px;
display: flex;

@media (min-width:641px) and (max-width:1024px) {
  height: 1024px;
}

.aside-left{
  background-color: #D7C3E2;
  width: 33vw;
  // height: 577px;
  display: flex 1;
  padding-left: 16px;
}

.aside-right{
  background-image: url(${BackgroundImg});
  // height: 577px;
  width: 67vw;
  background-size: cover;
  background-position: center;
  display: flex 2;
  padding-right: 16px;
}

.heroItem{
  position: absolute;
  top: 163px;
  left: 16px;
  width: 265px;
  height: 232px;
  display:flex;
  flex-direction: column;
  gap: 24px;
  }
 
  @media (min-width:641px) and (max-width:1024px) {
  .aside-left{
   height: 1024px;
   padding-left: 32px;
  }
  .aside-right{
    height: 1024px;
  }
  .heroItem{
    top: 320px;
    left: 32px;
    width: 384px;
    height: 352px;
  }
  }
`

export const HeroSite = () => {
  return (
    <StyledHeader>
      <aside className="aside-left" />
      <aside className="aside-right" />
      <NavBar />
      <div className="heroItem">
        <HeadLine>
          See new height with Aerial Silks
        </HeadLine>
        <SubHeadLine>
          Unleash your inner acrobat with our exhilarating full-body workout.
        </SubHeadLine>
        <Button textBtn>Sign up today</Button>
      </div>
    </StyledHeader>
  )
}
