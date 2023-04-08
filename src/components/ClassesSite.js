import React from 'react'
import styled from 'styled-components'
import { Title } from 'components/Typography'
import { OurClasses } from 'components/OurClasses'
import SilkImgTop from '../images/Silk-top-Big.png'
import SilkImgBottom from '../images/Silk-bottom-Big.png'
import { CardClasses } from './CardClasses'

const StyledOurClasses = styled.div`
background-color: #D7C3E2;
height: 630px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width:641px) and (max-width:1024px) {
  height: 1250px;
  align-items: flex-end;
}

@media (min-width: 1025px) {
  padding-top: 32px;
  height: 1077px;
}
`
const TopSilk = styled.img`
height: 75px;
display: flex;
align-self: stretch;
justify-self: flex-start;
position: relative;
margin-top: -50px;

@media (min-width:641px) and (max-width:1024px) {
  height: 161px;
  margin-top: 20px;
}

@media (min-width:1025px) {
  height:276px;
  margin-top: -200px;
}
`
const BottomSilk = styled.img`
height: 75px;
display: flex;
align-self: stretch;
justify-content: flex-end;
position: relative;
bottom: -40px;

@media (min-width:641px) and (max-width:1024px) {
  height: 160px;
  bottom: 20px;
}
  @media (min-width:1025px) {
    height: 276px;
   bottom: -170px;
  }
}
`

export const ClassesSite = () => {
  return (
    <StyledOurClasses>
      <TopSilk src={SilkImgTop} alt="topsilk" />
      <Title style={{ paddingRight: '32px' }}>Our classes</Title>
      <OurClasses />
      <CardClasses />
      <BottomSilk src={SilkImgBottom} alt="bottomsilk" />
    </StyledOurClasses>
  )
}

