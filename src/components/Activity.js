import React from 'react';
import { TagLine, H5 } from 'style/Texts';
import { ImageSmall } from 'style/ImageStyle';
import phone from '../images/iphone.png'

export const Activity = () => {
  return (
    <>
      <TagLine>ACTIVITY</TagLine>
      <H5>Track you activity & celebrate your progress</H5>
      <ImageSmall src={phone} />
    </>
  )
}