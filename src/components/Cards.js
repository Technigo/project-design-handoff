import React from 'react';
import { BodyText, H1, H4 } from 'style/Texts';
import { FlexColumn } from 'style/Flex';

// const BgImg = styled.img`
//     margin-bottom: 16px;
//     repeat: no-repeat;
//     overflow: hidden;
//     width: 100vw;
//     border-radius: 30px;
//     object-fit: cover;
//     height: 100vh;
//     border: none;
//     display: block;
//     `

export const Card = ({ color, imgSrc, headline, text }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})`, repeat: 'no-repeat' }}>
      <FlexColumn>
        <H4 color="#fff">{headline}</H4>
        <BodyText color="#fff">{text}</BodyText>
      </FlexColumn>
    </div>
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
