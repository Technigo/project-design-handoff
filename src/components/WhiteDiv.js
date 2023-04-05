import React from 'react'
import styled from 'styled-components'
import SilkImgBottom from '../images/Silk-bottom.png'

const StyledWhiteDiv = styled.div`
height: 120px;
`
const BottomSilk = styled.img`
width: 100vw;
margin-top: -32px;
`

export const WhiteDiv = () => {
  return (
    <StyledWhiteDiv>
      <BottomSilk src={SilkImgBottom} alt="bottomsilk" />
    </StyledWhiteDiv>
  )
}