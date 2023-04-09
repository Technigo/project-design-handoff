/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'

import BegImg from '../images/Beginner.png'
import InterImg from '../images/Intermediate.png'
import ExpImg from '../images/Expert.png'
import { ClassesHead } from './Typography'
import { Button } from './Button'

const Carousel = styled.section`
display: flex;
flex-direction: row;
width: 312px;
gap: 32px;
overflow: scroll;
scroll-snap-type: mandatory;
scroll-snap-points-x: repeat(300px);
scroll-snap-type: x mandatory;
`

const CardImg = styled.img`
width: 312px;
height: 240px;
object-fit: center;
border-radius: 13.8886px;
margin-top: 20px;
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;xss
align-items: center;
justify-content: center;
width: 312px;
height:fit-content;
gap: 32px;
scroll-snap-align: start;

.card-info {
  display:flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

@media (min-width:641px) {
  display: none;
}
`

export const CardClasses = () => {
  return (
    <Carousel>
      <StyledCard>
        <CardImg src={BegImg} alt="beginner" />
        <div className="card-info">
          <ClassesHead>Beginner</ClassesHead>
          <p className="card-text">
            Beginner classes for aerial silks teach you the foundational
            moves and techniques, and is led by experienced instructors
            to guide you. No prior experience is necessary.
          </p>
          <Button>See more</Button>
        </div>
      </StyledCard>
      <StyledCard>
        <CardImg src={InterImg} alt="beginner" />
        <div className="card-info">
          <ClassesHead>Intermediate</ClassesHead>
          <p className="card-text">
            Intermediate classes build on foundational moves and introduce complex techniques,
            led by experienced instructors. They improve strength, flexibility, and coordination.
          </p>
          <Button>See more</Button>
        </div>
      </StyledCard>
      <StyledCard>
        <CardImg src={ExpImg} alt="beginner" />
        <div className="card-info">
          <ClassesHead>Expert</ClassesHead>
          <p className="card-text">
            Expert classes are for the experienced aerialists,
            which offer a challenging workout with advanced techniques.
            Led by skilled instructors to help guide you to refine your skills.
          </p>
          <Button>See more</Button>
        </div>
      </StyledCard>
    </Carousel>
  )
}