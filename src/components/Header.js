import React from 'react';
import styled from 'styled-components';
import { TopRightButton, BottomCenterButton } from './Global'
import heroImage from '../assets/hero.jpg';

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: #03092E;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align items to the bottom */
  height: 90vh;
  position: relative; /* Add position relative to the container */
  padding-bottom: 4rem; /* Add padding to adjust the spacing */
`;

const TitleContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center; /* Align items vertically */
width: 30%;
padding: 0 2 rem; /* Add padding to adjust the spacing */
margin-top: -3rem;
`;

const Title = styled.h1`
font-size:2.5rem;
font-weight: bold;
flex: 0.4;
word-break: break-word;
margin-top: 0; /* Reset top margin */
`;

const Description = styled.p`
font-size: 1rem;
line-height: 1.5;
flex: 0.6;
word-break: break-word;
margin-top: 0; /* Reset top margin */
`;

const Hero = ({ title, description }) => {
  return (
    <HeroContainer image={heroImage}>
      <TitleContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleContainer>
      <TopRightButton>Try for Free</TopRightButton>
      <BottomCenterButton>Try for Free</BottomCenterButton>
    </HeroContainer>
  );
};

const Header = () => {
  return (
    <div>
      <Hero
        title="Online Healthy Diet Strong Body"
        description="Level up your life to the happier and healthier with help of the certified personal trainers and nutrition coaches based on your personal circumstance" />
    </div>
  );
};

export default Header;
