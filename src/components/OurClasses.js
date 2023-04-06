import React from 'react'
import styled from 'styled-components'
import { Title } from 'components/Typography'
import { OurClassesInfo } from 'components/OurClassesInfo'
import SilkImgTop from '../images/Silk-top-Big.png'
import SilkImgBottom from '../images/Silk-bottom-Big.png'

// , P20, P16

const StyledOurClasses = styled.div`
background-color: #D7C3E2;
height: 694px;
display: flex;
flex-direction: column;
align-items: center;


@media (min-width:641px) and (max-width:1024px) {
  height: 1176px;
  align-items: flex-end;
}

@media (min-width: 1025px) {
  padding-top: 32px;
}
`
const TopSilk = styled.img`
height: 75px;
margin-top: -86px;
display: flex;
align-self: stretch;

@media (min-width:641px) and (max-width:1024px) {
  height: 161px;
  margin-top: -90px;
}
`
const BottomSilk = styled.img`
width: 100vw;
height: 75px;
margin-top: 200px;

@media (min-width:641px) and (max-width:1024px) {
  height: 160px;
  margin-top: 145px;
`

export const OurClasses = () => {
  return (
    <StyledOurClasses>
      <TopSilk src={SilkImgTop} alt="topsilk" />
      <Title style={{ paddingRight: '32px' }}>Our classes</Title>
      <OurClassesInfo />
      <BottomSilk src={SilkImgBottom} alt="bottomsilk" />
    </StyledOurClasses>
  )
}

