import React from 'react'
import styled from 'styled-components'
import { P20, P16 } from 'components/Typography'
import { Button } from './Button'
import BeginnerImg from '../images/Beginner.png'
import InterImg from '../images/Intermediate.png'
import ExpertImg from '../images/Expert.png'

const Images = styled.img`
max-width: 256px;
height: 248px;
object-fit: cover;
border-radius: 13.8886px;

@media (min-width: 1025px) {
  max-width: 320px;
  height: 248px;
`
const StyledClassesInfo = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin-top: 32px;
padding: 0px 32px;

@media (max-width: 690px) {
display: none;
}

@media (min-width: 1025px) {
  flex-direction: row;
  padding: 0px 64px;
}

.img-and-text {
  border-top: solid 1px #131313;
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-top: 24px;
}

.info-text{
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

@media (min-width: 1025px){
  .img-and-text{
    flex-direction: column;
    border-top: none;
    
  }
}

`

export const OurClassesInfo = () => {
  return (
    <StyledClassesInfo>
      <div className="img-and-text">
        <Images src={BeginnerImg} alt="beginner" />
        <div className="info-text">
          <P20>Beginner</P20>
          <P16>
            Beginner classes for aerial silks
            teach you the foundational moves and techniques,
            and is led by experienced instructors to guide you.
            No prior experience is necessary.
          </P16>
          <Button>See more</Button>
        </div>
      </div>
      <div className="img-and-text">
        <Images src={InterImg} alt="beginner" />
        <div className="info-text">
          <P20>Intermediate</P20>
          <P16>
            Intermediate classes build on foundational moves and introduce
            complex techniques, led by experienced instructors.
            They improve strength, flexibility, and coordination.
          </P16>
          <Button>See more</Button>
        </div>
      </div>
      <div className="img-and-text">
        <Images src={ExpertImg} alt="beginner" />
        <div className="info-text">
          <P20>Expert</P20>
          <P16>
            Expert classes are for the experienced aerialists,
            which offer a challenging workout with advanced techniques.
            Led by skilled instructors to help guide you to refine your skills.
          </P16>
          <Button>See more</Button>
        </div>
      </div>
    </StyledClassesInfo>
  )
}