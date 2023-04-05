import React from 'react'
import styled from 'styled-components'
import { Title3 } from 'components/Typography'
// import ReactImageGallery from 'react-image-gallery'
import SilkImgTop from '../images/Silk-top.png'

// , P20, P16

const StyledOurClasses = styled.div`
background-color: #D7C3E2;
height: 694px;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
`
const TopSilk = styled.img`
width: 100vw;
margin-top: -32px;
`

export const OurClasses = () => {
  return (
    <StyledOurClasses>
      <TopSilk src={SilkImgTop} alt="topsilk" />
      <Title3>Our classes</Title3>
    </StyledOurClasses>
  )
}

