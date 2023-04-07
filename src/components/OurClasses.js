import React from 'react'
import styled from 'styled-components'
import { Body } from 'components/Typography'
import { Button } from './Button'
import BeginnerImg from '../images/Beginner.png'
import InterImg from '../images/Intermediate.png'
import ExpertImg from '../images/Expert.png'

const Images = styled.img`
width: 256px;
height: 248px;
object-fit: cover;
border-radius: 13.8886px;


@media (min-width: 1025px) {
  width: 182px;
  height: 248px;
  align-self: center;
`
const StyledClassesInfo = styled.div`
display: flex;
flex-direction: column;
margin-top: 32px;
padding: 0px 32px;

@media (max-width:640px) {
  display: none;
}


@media (min-width: 1025px) {
  flex-direction: row;
}

.img-and-text {
  border-top: solid 1px #131313;
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-top: 24px;
  padding: 40px 64px;


.info-text{
  display: flex;
  flex-direction: column;
  gap: 16px 32px;
  align-items: center;
}

@media (min-width: 641px) and (max-width: 1024px) {
  padding: 48px 40px 40px 16px;
  }
}

@media (min-width: 1025px){
  .img-and-text{
    flex-direction: column;
    border-top: none;
    border-left: solid 1px #131313
  }
  .img-and-text:first-child {
    border-left: none;
  }
  .info-text:
  justify-content: center;
}
`

export const OurClasses = () => {
  return (
    <StyledClassesInfo>
      <div className="img-and-text">
        <Images src={BeginnerImg} alt="beginner" />
        <div className="info-text">
          <Body>Beginner</Body>
          <Body>
            Beginner classes for aerial silks
            teach you the foundational moves and techniques,
            and is led by experienced instructors to guide you.
            No prior experience is necessary.
          </Body>
          <Button>See more</Button>
        </div>
      </div>
      <div className="img-and-text">
        <Images src={InterImg} alt="beginner" />
        <div className="info-text">
          <Body>Intermediate</Body>
          <Body>
            Intermediate classes build on foundational moves and introduce
            complex techniques, led by experienced instructors.
            They improve strength, flexibility, and coordination.
          </Body>
          <Button>See more</Button>
        </div>
      </div>
      <div className="img-and-text">
        <Images src={ExpertImg} alt="beginner" />
        <div className="info-text">
          <Body>Expert</Body>
          <Body>
            Expert classes are for the experienced aerialists,
            which offer a challenging workout with advanced techniques.
            Led by skilled instructors to help guide you to refine your skills.
          </Body>
          <Button>See more</Button>
        </div>
      </div>
    </StyledClassesInfo>
  )
}