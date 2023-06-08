import React, { useState } from 'react';
import styled from 'styled-components';
import Flexable from '../assets/1.png';
import Basic from '../assets/2.png';
import Grow from '../assets/3.jpg';
import Leftarrow from '../assets/left-arrow.png';
import Rightarrow from '../assets/right-arrow.png';

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
`;

const SliderItemContainer = styled.div`
  width: auto;
  height: 427.34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.52369px solid #025323;
  border-radius: 16.8246px;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
  margin-top: 46px;
  padding: 0 10px;
  margin-bottom: 25px;
`;

const Content = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 167.5%;
  text-align: center;
  color: #025323;
  padding: 0 50px;
  margin-bottom: 25px;
`;
export const Image = styled.img`
  width: 288.54px;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 16.8246px;
  border-top-right-radius: 16.8246px;
`;
const Wrapper = styled.div`
  align-items: left;
  width: auto;
  padding-left: 16px;
  margin-bottom: 25px;
`
const Header = styled.h2`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 18.5071px;
  line-height: 22px;
  color: #025323;
  margin-top: 1em;
`;
const Access = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 9.25353px;
  line-height: 11px;
  color: #025323;
  margin:0px;
`;
const Price = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 12.2091px;
  line-height: 15px;
  color: #000000;
  margin-right: 10px;
`;
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
  margin-top: 1em;
  width: 244px;
  cursor:pointer;
`;

const ArrowButtonLeft = styled.button`
  height: 19.28px;
  width: 19.28px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  left: 25px;
`;

const ArrowButtonRight = styled.button`
  height: 19.28px;
  width: 19.28px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  top: 60%;
  right: 25px;
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