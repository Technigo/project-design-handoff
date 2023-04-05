import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero-image.png';

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
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
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
  background-color: white;
  color: orange;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #f44336;
  }
`;