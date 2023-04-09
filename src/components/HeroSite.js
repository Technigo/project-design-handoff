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

@media (min-width: 1024px) {
  height: 1024px;
}

.aside-left{
  background-color: #D7C3E2;
  width: 33vw;
  display: flex 1;
  padding-left: 16px;
}

.aside-right{
  background-image: url(${BackgroundImg});
  width: 67vw;
  background-size: cover;
  background-position: center;
  display: flex 2;
  padding-right: 16px;
}

.heroItem {
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
   padding-left: 32px;
  }
  .heroItem {
    top: 320px;
    left: 32px;
    width: 384px;
    height: 352px;
  }
  }

  @media (min-width:1025px) {
    .heroItem {
      width: 557px;
      top: 320px;
      left: 64px;
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
