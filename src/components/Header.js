import React from 'react';
import styled from 'styled-components';
import { TopRightButton, BottomCenterButton } from './Button'
import heroImage from '../assets/hero.jpg';

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: #03092E;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  position: relative; /* Add position relative to the container */
`;

const Title = styled.h1`
font-size:2.5rem;
font-weight: bold;
margin-top: 32rem;
margin-left: 0.5;
width: 17%;
`;

const Description = styled.p`
font-size: 1.5rem;
line-height: 1.5;
margin-bottom:2rem;
`;

const Hero = ({ title, description }) => {
  return (
    <HeroContainer image={heroImage}>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
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
