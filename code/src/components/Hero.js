import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero-image-smaller.png';
import mobileHeroImage from '../images/mobile-hero-image.png';

export const HeroSection = () => {
  return (
    <Container>
      <HeaderText>Online Healthy Diet Strong Body</HeaderText>
      <SubText>Level up your life to the happier and healthier
        with help of the certified personal trainers and
        nutrition coaches based on your personal circumstance
      </SubText>
      <Button>Try for Free</Button>
    </Container>
  );
};
const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-image: url(${heroImage}); 
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 600px) {
    background-image: url(${mobileHeroImage});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 20px;
    left: 20px;
    margin-right: 40px;
  }
`;

const SubText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding-bottom: 90px;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border-color: #ff8f3d;
  border-radius: 10px ;
  border: 3px solid;
  background-color: transparent;
  color: #FF8F3D;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #f44336;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;