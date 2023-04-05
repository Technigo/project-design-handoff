import React from 'react';
import styled from 'styled-components';
import { TopRightButton, BottomCenterButton } from './Button'
import heroImage from '../assets/hero.jpg';

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative; /* Add position relative to the container */
`;

const Hero = ({ title, description }) => {
  return (
    <HeroContainer image={heroImage}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
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
