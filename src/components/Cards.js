import React from 'react';
import styled from 'styled-components';
import { BodyText, H1, H4 } from 'style/Texts';

const BgImg = styled.div`
    margin-bottom: 16px;
    repeat: no-repeat;
    overflow: hidden;
    width: 100vw;
    border-radius: 30px;
    object-fit: cover;
    height: 100vh;
    border: none;
    display: block;
    position: relative;
    `

const BgColor = styled.div`
    margin-bottom: 16px;
    repeat: no-repeat;
    overflow: hidden;
    border-radius: 30px;
    object-fit: cover;
    height: 100%;
    width: 80%;
    padding: 32px;
    border: none;
    display: block;
`

const TextWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    margin: 32px;
`

export const Card = ({ color, imgSrc, headline, text }) => {
  return (
    <BgImg
      style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})`, repeat: 'no-repeat' }}>
      <TextWrapper>
        <H4 color="#fff">{headline}</H4>
        <BodyText color="#fff">{text}</BodyText>
      </TextWrapper>
    </BgImg>
  )
}

export const CardText = ({ color, headline, text }) => {
  return (
    <BgColor style={{ background: `${color}` }}>
      <H1 color="#222322">{headline}</H1>
      <BodyText color="#222322">{text}</BodyText>
    </BgColor>
  )
}

export const CardTextSmall = ({ color, headline, text }) => {
  return (
    <BgColor style={{ background: `${color}` }}>
      <H4 color="#222322">{headline}</H4>
      <BodyText color="#222322">{text}</BodyText>
    </BgColor>
  )
}
