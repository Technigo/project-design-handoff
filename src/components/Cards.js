import React from 'react';
import styled from 'styled-components';
import { BodyText, H1, H4 } from 'style/Texts';
import { ViewMoreButton } from 'style/ButtonsStyle';

const BgImg = styled.div`
    height: 100vh;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 30px;
    background-size: cover;
    background-position: center top;
    border: none;
    position: relative;
    `

const BgColor = styled.div`
    repeat: no-repeat;
    overflow: hidden;
    height: 100%;
    width: 80vw;
    border-radius: 30px;
    object-fit: cover;
    padding: 32px;
    margin-top: 16px;
    border: none;
    display: block;
`

const TextWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    margin: 32px;
`

const TextWrapperVideo = styled.div`
    position: absolute;
    bottom: 10%;
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

export const CardVideo = ({ color, imgSrc, headline, text, button }) => {
  return (
    <BgImg
      style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})`, repeat: 'no-repeat' }}>
      <TextWrapperVideo>
        <H4 color="#fff">{headline}</H4>
        <BodyText color="#fff">{text}</BodyText>
      </TextWrapperVideo>
      <ViewMoreButton color="#222322" bg="#FFFFFF">{button}</ViewMoreButton>
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
