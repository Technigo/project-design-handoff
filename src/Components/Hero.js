import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../images/___oksana-taran-xB4ExGcUai0-unsplash.jpg';

const HeroWrapper = styled.div`
position: relative;
width: 100vw;`

const HeroContainer = styled.div`
  height: 730px;
  width: 100%;
  overflow-x: hidden;
  @media (min-width: 744px) {
    height: 750px;
    @media (min-width: 1000px) {
    height: 1125px;
  }
}
`
const HeroImg = styled.div`
background-image: url(${HeroBackground});
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 150%;
background-position: center;
@media (min-width: 744px) {
    width: 110%;
}
`

const TextContainerBig = styled.div`
display: flex;
color: #025323;
flex-direction: column;
position: absolute;
width: min(80%, 750px);
top: 10%;
padding-left: 2rem;
@media (min-width: 744px) {
    top: 20%;
    padding-left: 3rem;
}
@media (min-width: 1100px) {
    width: min(60%, 750px);
}
@media (min-width: 1350px) {
    width: 800px;
}
`

const TextContainerSmall = styled.div`
max-width: 70%;
color: #025323;
@media (min-width: 1170px) {
    max-width: 65%;
}
@media (min-width: 1350px) {
    max-width: 62%;
}
`

const Headline = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    @media (min-width: 870px) {
        font-size: 54px;
}
@media (min-width: 1000px) {
        font-size: 60px;
}
@media (min-width: 1200px) {
        font-size: 70px;
}
@media (min-width: 1330px) {
        font-size: 80px;
}
`
const Text = styled.p`
    font-weight: 500;
    line-height: 37px;
`

const Button = styled.button`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  background: #025323;
  border-radius: 15px;
  width: 200px;
  height: 59px;
  border: none;
  margin-top: 3rem;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
@media (min-width: 380px) {
    width: 244px;
}
  @media (min-width: 550px) {
    align-self: flex-start;
}
  `
export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroImg />
      </HeroContainer>
      <TextContainerBig>
        <Headline>Breathe in
           Breathe out
        </Headline>
        <TextContainerSmall>
          <Text>Yogistudio offers an overall concept
         in self-healing with a focus on calm and therapeutic forms of yoga.
          </Text>
        </TextContainerSmall>
        <Button type="button" id="bookAClass">Book a class</Button>
      </TextContainerBig>
    </HeroWrapper>
  )
}

