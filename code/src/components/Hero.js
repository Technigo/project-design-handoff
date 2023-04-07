import React from 'react';
import styled from 'styled-components';

export const HeroSection = () => {
  return (
    <Container>
      <HeaderText>Online Healthy Diet Strong Body</HeaderText>
      <SubText>Level up your life to be happier and healthier</SubText>
      <Button>Try for Free</Button>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  widht: 100vw;
  height: 150vh;
  background-image: url('/images/hero-image-smaller.png');
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 600px) {
    background-image: url('/images/mobile-hero-image.png');
  }
`;

const HeaderText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
`;

const SubText = styled.p`
  font-size: 2rem;
  color: #fff;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-color: orange;
  border-radius: 10px ;
  background-color: transparent;
  color: #FF8F3D;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #f44336;
  }
`;