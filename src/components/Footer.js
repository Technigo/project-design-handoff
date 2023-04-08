import React from 'react';
import styled from 'styled-components';
import Bubblor from 'assets/Bubblor.png'
import GreenBottom from 'assets/GreenBottom.png'

const FooterWrapper = styled.div`
width: 100%;
height: 100%;
object-fit: cover;
`
const Bubbles = styled.div`
`

export const Footer = () => {
  return (
    <FooterWrapper src={GreenBottom}>
      <Bubbles src={Bubblor} />
    </FooterWrapper>
  )
}