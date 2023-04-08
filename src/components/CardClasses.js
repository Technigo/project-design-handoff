import React from 'react'
import styled from 'styled-components'
import BegImg from '../images/Beginner.png'
// import InterImg from '../images/Intermediate.png'
// import ExpImg from '../images/Expert.png'
import { ClassesHead } from './Typography'
import { Button } from './Button'

const CardImg = styled.img`
width: 312px;
height: 240px;
object-fit: center;
border-radius: 13.8886px;
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content; center;
width: 312px;
gap: 32px;

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
    // <div className="carousel">
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
    // <StyledCard>
    //   <CardImg src={InterImg} alt="beginner" />
    //   <Body>Intermediate</Body>
    //   <p className="card-text">
    //     Intermediate classes build on foundational moves and introduce complex techniques,
    //     led by experienced instructors. They improve strength, flexibility, and coordination.
    //   </p>
    //   <Button>See more</Button>
    // </StyledCard>
    // <StyledCard>
    //   <CardImg src={ExpImg} alt="beginner" />
    //   <Body>Expert</Body>
    //   <p className="card-text">
    //     Expert classes are for the experienced aerialists,
    //     which offer a challenging workout with advanced techniques.
    //     Led by skilled instructors to help guide you to refine your skills.
    //   </p>
    //   <Button>See more</Button>
    // </StyledCard>
    // </div>
  )
}