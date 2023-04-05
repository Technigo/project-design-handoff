import React from 'react';
import styled from 'styled-components';
import SingleLogoABlue from '../../assets/SingleLogoABlue.svg'

const TopWrapper = styled.div`
display:flex;
width: 100vw;
align-items: center;
justify-content: space-between;
margin-top: 51px;
`

const LogoLeft = styled.img`
transform: rotate(90deg);
width: 12.7%;
`

const LogoRight = styled.img`
transform: rotate(270deg);
width: 12.7%;
`

const Description = styled.p`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: -0.022em;
color: #0962CF;
width: 66%;
margin: 0;
`

export const TopDescription = () => {
  return (
    <TopWrapper>
      <LogoLeft src={`${SingleLogoABlue}`} />
      <Description>
            Physical activity is vital for the body. Learn how to master
            unique skills where you&apos;ll develop strength,
            confidence and you&apos;ll defy yourself.
      </Description>
      <LogoRight src={`${SingleLogoABlue}`} />
    </TopWrapper>
  )
}