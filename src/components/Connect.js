import React from 'react'
import styled from 'styled-components'
import { Subtitle } from './Typography'
import FbIcon from '../images/fb-icon.svg'
import InstaIcon from '../images/insta-icon.svg'

const ConnectSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
min-height: 50vh;
text-align: center;
`
const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 48%;
align-items: center;
justify-content: center;
gap: 10px;

@media (min-width: 667px){
width: 72%;
}
`
const LogoWrapper = styled.div`
display: flex;
gap: 10px;
`

export const Connect = () => {
  return (
    <ConnectSection>
      <ContentWrapper>
        <Subtitle>CONNECT WITH US!</Subtitle>
        <LogoWrapper>
          <img src={FbIcon} alt="Facebook logo" />
          <img src={InstaIcon} alt="Instagram logo" />
        </LogoWrapper>
      </ContentWrapper>
    </ConnectSection>
  )
}