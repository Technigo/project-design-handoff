import React from 'react'
import { Title, P14 } from 'components/Typography'
import styled from 'styled-components'

const StyledWhyArial = styled.section`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 577px;

@media (min-width:641px) and (max-width:1024px) {
  height: 602px;
}

.textArea {
height: 377px;
width: 312px;
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;

@media (min-width:641px) and (max-width:1024px) {
  width: 577px;
}
`

// @media (min-width:641px) and (max-width:1024px) {
//   height: 234px;
//   width: 577px;
// }

export const WhyArial = () => {
  return (
    <StyledWhyArial>
      <div className="textArea">
        <Title>Why Aerial silks?</Title>
        <P14>
          Aerial silks is a graceful and effective form of
          exercise that involves performing acrobatic moves
          while suspended from fabric silks.
          It is a great way to stay fit and challenge yourself,
          all while having fun. With regular practice,
          aerial silks can help develop strength, flexibility,
          and coordination. It&apos;s a unique combination of physical
          and mental challenges which can boost confidence and leave
          you feeling empowered. Why not give aerial silks a try and
          experience the excitement for yourself?
        </P14>
      </div>
    </StyledWhyArial>
  )
}