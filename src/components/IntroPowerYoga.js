/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { YellowText } from './Classes'
import { YogaText } from './InfoYogaStudio'

const IntroPowerYogaWrapper = styled.div`
background-color: #2E160E;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
padding: 35px; 

@media (max-width: 667px) {
    display: none;
}

@media (min-width: 1024px) {
  padding: 48px;
}

`
export const IntroPowerYoga = () => {
  return (
    <IntroPowerYogaWrapper>
      <YellowText>What is Power Yoga?</YellowText>
      <YogaText>Power yoga is a fast-paced style of yoga that&apos;s focused on building strength and endurance. Whilst practising this form of yoga, you will feel the tension and toxins leaving your body and your posture and back pain getting better.</YogaText>
    </IntroPowerYogaWrapper>
  )
}