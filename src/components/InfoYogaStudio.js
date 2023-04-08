/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { YellowText } from './Classes'

const InfoYogaStudioWrapper = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #2E160E;
gap: 8px;
padding: 35px; 

@media (max-width: 667px){
    display: none;
}

@media (min-width: 1024px) {
  padding: 48px;
}
`
export const YogaText = styled.p`
font-size: 1rem; 
line-height: 18px;
font-weight:400px; 
max-width: 380px;
text-align: center;
color: white;

@media (min-width: 1024px){
  font-size: 1.5rem;
  line-height: 27px;
  max-width: 591px;
}`

export const InfoYogaStudio = () => {
  return (
    <InfoYogaStudioWrapper>
      <YellowText>Santulan Power Yoga Studio</YellowText>
      <YogaText>
      Put simply, Yoga transformed our lives and we want to share that magic with you. We created Santulan to empower your journey to personal growth and well-being. Our classes weave ancient yogic philosophy into 21st century life, and everyone’s welcome, from absolute beginners to advanced practitioners. We passionately believe that Power Yoga is for everyone, and no matter your age or flexibility, our expert teachers will ensure you leave each class stronger in mind and body.
      </YogaText>
    </InfoYogaStudioWrapper>
  )
}