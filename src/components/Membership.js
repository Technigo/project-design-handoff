import React, { useState } from 'react';
import styled from 'styled-components';
import Flexable from '../images/1.png';
import Basic from '../images/2.png';
import Grow from '../images/3.png';
import Leftarrow from '../images/left-arrow.png';
import Rightarrow from '../images/right-arrow.png';

const items = [
  { image: Flexable, header: 'BE FLEXIBLE', access: 'PAY WHEN YOU PRACTICE', price: '2499 SEK/PER MONTH' },
  { image: Basic, header: 'BASIC', access: 'ACCESS ALL OUR IN-STUDIO', price: '899 SEK/PER MONTH' },
  { image: Grow, header: 'GROW', access: 'ACCESS ALL OUR IN-STUDIO AND ONLINE CLASSES', price: '1899 SEK/PER MONTH' }
];

const MemberShipContainer = styled.div`
  width: auto;
  height: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  position: relative;
  padding: 2em;
`

const SliderItemContainer = styled.div`
  width: 80vw;
  height: 427px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #025323;
  border-radius: 16px;
  margin-bottom: 2em;

  @media (min-width: 420px) {
    width: 70vw;
    height: 480px;
 }

 @media (min-width: 600px) {
    width: 350px;
    height: 510px;
 }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
  margin-top: 46px;
  padding: 0 10px;
  margin-bottom: 1rem;
`

const Content = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 167.5%;
  text-align: center;
  color: #025323;
  margin-bottom: 25px;

  @media (min-width: 400px) {
  padding: 0 6em;
 }
`

export const Image = styled.img`
  width: 80vw;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (min-width: 420px) {
    width: 70vw;
 }
 @media (min-width: 600px) {
    width: 350px;
 }
`

const Wrapper = styled.div`
  align-items: left;
  width: auto;
  padding-left: 16px;
  margin-bottom: 25px;
`
const Header = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #025323;
  margin-top: 1em;
`

const Access = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: #025323;
  margin:0;
`

const Price = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-right: 10px;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 47px;
  background: #025323;
  border-radius: 15px;
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;
  width: 200px;
  cursor:pointer;

  @media (min-width: 330px) {
    width: 244px;
 }
`

const ArrowButtonLeft = styled.button`
  height: 19px;
  width: 19px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  left: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const ArrowButtonRight = styled.button`
  height: 19px;
  width: 19px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  right: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const Membership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <MemberShipContainer>
      <Title>Sign up for membership</Title>
      <Content>Most classes are 30 minutes and several of them can been taken online</Content>
      <SliderItemContainer>
        <Image src={items[currentIndex].image} alt="carousel item" />

        <Wrapper>
          <Header>{items[currentIndex].header}</Header>
          <Access>{items[currentIndex].access}</Access>
        </Wrapper>
        <Price>{items[currentIndex].price}</Price>
        <Button type="button">Buy Now</Button>
      </SliderItemContainer>

      <ArrowButtonLeft onClick={handlePrevClick}>
        <img src={Leftarrow} alt="left" />
      </ArrowButtonLeft>
      <ArrowButtonRight onClick={handleNextClick}>
        <img src={Rightarrow} alt="right" />
      </ArrowButtonRight>
    </MemberShipContainer>
  );
};