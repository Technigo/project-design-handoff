import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import heroImage from '../assets/hero.jpg';

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const Hero = ({ title, description }) => {
  return (
    <HeroContainer image={heroImage}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </HeroContainer>
  );
};

const Header = () => {
  return (
    <div>
      <Button>Try for Free</Button>
      <Hero
        title="Online Healthy Diet Strong Body"
        description="Level up your life to the happier and healthier with help of the certified personal trainers and nutrition coaches based on your personal circumstance" />
      <Button>Try for Free</Button>
    </div>
  );
};

export default Header;
