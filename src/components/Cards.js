import React from 'react';
import { BodyText, H4 } from 'style/Texts';
import { Image } from 'style/ImageStyle';
import { FlexColumn, FlexColumnNoPosition } from 'style/Flex';

export const Card = ({ color, imgSrc, headline, text }) => {
  return (
    <FlexColumnNoPosition>
      <Image
        style={{ backgroundImage: `linear-gradient(17deg, ${color} 16%, rgba(255, 255, 255, 0) 54%), url(${imgSrc})` }} />
      <H4 color="#fff">{headline}</H4>
      <BodyText color="#fff">{text}</BodyText>
    </FlexColumnNoPosition>
  )
}
