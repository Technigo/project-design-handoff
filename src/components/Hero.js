import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/Hero.jpg';

export const Hero = () => {
  const Heading = styled.h1`
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #025323;
    position: absolute;
    top: 82px;
    left: 23px;
    right: 53px;
    width: 238px;
    
    @media (min-width: 668px) {
      min-width: 455px;
    }
    @media (min-width: 1440px) {
      font-size: 79px;
      min-width: 748px;
      left: 64px;
      top: 302px;
    }`
  const Text = styled.p`
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 37px;
    color: #025323;
    position: absolute;
    top: 221px;
    left: 23px;
    right: 53px;
    min-width: 263px;
    max-width: 280px;
    
    @media (min-width: 668px) {
      min-width: 442px;
    }
    @media (min-width: 1440px) {
      min-width: 528px;
      left: 64px;
      top: 413px;
    }`
  const Button = styled.button`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  background: #025323;
  border-radius: 15px;
  width: 244px;
  height: 59px;
  position: absolute;
  top: 419px;
  left: 42px;
  margin-top: 16px;
  border: none;
  
  &:hover {
    background-color: #EBEBEB;
  }
  
  @media (min-width: 428px) {
    left: 92px;
  }
  @media (min-width: 1440px) {
    left: 64px;
    top: 594px;
  }`
  return (
    <div className="hero-wrapper">
      <img className="hero-img" src={heroImage} alt="Person doing yoga" />
      <Heading>Breath in breath out</Heading>
      <Text>Yogistudio offers an overall concept in self-healing
         with a focus on calm and therapeutic forms of yoga.
      </Text>
      <Button type="button" id="bookAClass">Book a class</Button>
    </div>
  )
}