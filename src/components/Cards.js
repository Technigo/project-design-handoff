import React from 'react';
import { BodyText, H1, H4 } from 'style/Texts';
import { BgImg } from 'style/ImageStyle';
import { FlexColumn } from 'style/Flex';

export const Card = ({ color, imgSrc, headline, text }) => {
  return (
    <>
      <BgImg
        style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})` }} />
      <FlexColumn>
        <H4 color="#fff">{headline}</H4>
        <BodyText color="#fff">{text}</BodyText>
      </FlexColumn>
    </>
  )
}

export const CardText = ({ color, headline, text }) => {
  return (
    <FlexColumn>
      <H1 color="#222322">{headline}</H1>
      <BodyText color="#222322">{text}</BodyText>
      <div style={{ background: `${color}` }} />
    </FlexColumn>
  )
}

export const CardTextSmall = ({ color, headline, text }) => {
  return (
    <>
      <FlexColumn>
        <H4 color="#222322">{headline}</H4>
        <BodyText color="#222322">{text}</BodyText>
      </FlexColumn>
      <div style={{ background: `${color}` }} />
    </>
  )
}
