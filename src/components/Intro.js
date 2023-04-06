import React from 'react'
import styled from 'styled-components'
import IntroImage from '../images/intro-image.jpg'
import { IntroButton } from './Button'
import { Detailtext, Subtitle, Pbold, Pregular } from './Typography'

const Section = styled.section`
height: 100vh; 

@media (min-width: 769px) {
padding: 0 64px;
}`

const DivIntro = styled.div`
display: flex;
flex-flow: column;
height: 100%;

@media (min-width: 769px) {
flex-direction: row;
gap: 65px;
align-items: center;
justify-content: center;
}
`

const IntroMedia = styled.img`
object-fit: cover;
width: 100%;
height: 40.1%;

@media (min-width: 570px) {
  height: 51%;
}

@media (min-width: 769px) {
  width: 50%;
  }
`
const Article = styled.article`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 24px 16px;
height: 50vh;
width: 90%;

@media (min-width: 769px) {
  width: 50%;
  padding: 0;
  }
`

export const Intro = () => {
  return (
    <Section>
      <DivIntro>
        <IntroMedia src={IntroImage} alt="People stretching" />
        <Article>
          <Detailtext>OUR GOAL IS TO PROMOTE</Detailtext>
          <Subtitle>THE JOY OF EXERCISE</Subtitle>
          <Pbold>Teamwork. Bodyweight. Fresh air</Pbold>
          <Pregular>CrossPark is currently located in Stockholm, Göteborg and Malmö.
          We offer outdoor training sessions where nature and your body are the only tools needed.
          With our fun, simple and effective exercises we train strength,
          fitness, balance and agility.
          </Pregular>
          <IntroButton><p>Read more!</p></IntroButton>
        </Article>
      </DivIntro>
    </Section>
  )
}