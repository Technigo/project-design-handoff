import React from 'react'
import styled from 'styled-components'
import IntroImage from '../images/intro-image.jpg'
import { IntroButton } from './Button'
import { Detailtext, Subtitle, Pbold, Pregular } from './Typography'

const Section = styled.section`


`

const IntroMedia = styled.img`
object-fit: cover;
width: 100%;
height: 50vh;
`
const Article = styled.article`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 24px 16px;
height: 50vh;
width: 90%;
`

export const Intro = () => {
  return (
    <Section>
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
    </Section>
  )
}