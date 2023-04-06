/* eslint-disable  */

import React, { useState } from 'react';
import styled from 'styled-components';
import Flexable from '../images/1.png';
import Basic from '../images/2.png';
import Grow from '../images/3.jpg';

const items = [
  { image: Flexable, header: 'BE FLEXABLE', access: 'PAY WHEN YOU PRACTICE', price: '2499 SEK/PER MONTH' },
  { image: Basic, header: 'BASIC', access: 'ACCESS ALL OUR IN-STUDIO', price: '899 SEK/PER MONTH' },
  { image: Grow, header: 'GROW', access: 'ACCESS ALL OUR IN-STUDIO AND ONLINE CLASSES', price: '1899 SEK/PER MONTH' }
];

const MemberShipContainer = styled.div`
  width: 100vw;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SliderItemContainer = styled.div`
  width: 288.54px;
  height: 427.34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.52369px solid #025323;
  border-radius: 16.8246px;
`;

const Title = styled.h1`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
`;

const Content = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 167.5%;
  text-align: center;
  color: #025323;
`;
export const Image = styled.img`
  width: 288.54px;
  height: 201.05px;
  object-fit: cover;
  border-radius: 16.8246px;
`;

const Header = styled.h2`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 18.5071px;
  line-height: 22px;
  color: #025323;

`;
const Access = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 9.25353px;
  line-height: 11px;
  color: #025323;
  text-align: left;
`;
const Price = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 12.2091px;
  line-height: 15px;
  color: #000000;

`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 47px;
  gap: 10px;
  background: #025323;
  border-radius: 15px;
  text-align: center;
  color: #FFFFFF;

`;

const ArrowButtonLeft = styled.button`
// background-color: transparent;
// border: none;
// display: flex;
// justify-content: center;
// align-items: center;
// margin: auto;
svg {
  width: 24px;
  height: 24px;
}
position:absolute;
top:56%;
left:10px;
`;

const ArrowButtonRight = styled.button`
// background-color: transparent;
// border: none;
// display: flex;
// justify-content: center;
// align-items: center;
// margin: auto;
svg {
  width: 24px;
  height: 24px;
}
position:absolute;
top:56%;
right:10px;
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
      <Content>Most classes are 30 minutes and serivel of them can been taken online</Content>
      
      <SliderItemContainer>
        <Image src={items[currentIndex].image} alt="carousel item" />
        <Header>{items[currentIndex].header}</Header>
        <Access>{items[currentIndex].access}</Access>
        <Price>{items[currentIndex].price}</Price>
        <Button type="button">Buy Now</Button>
      </SliderItemContainer>

      <ArrowButtonLeft onClick={handlePrevClick}>
        <img src="/images/left-arrow.png" alt="left"></img>
        {/* <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1591 0.942322L16.1644 3.94761L6.40254 13.7308L16.1644 23.514L13.1591 26.5192L0.370642 13.7308L13.1591 0.942322Z" fill="black" />
        </svg> */}
      </ArrowButtonLeft>
      <ArrowButtonRight onClick={handleNextClick}>
        <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.84086 0.942322L0.835571 3.94761L10.5974 13.7308L0.835571 23.514L3.84086 26.5192L16.6293 13.7308L3.84086 0.942322Z" fill="black" />
        </svg>
      </ArrowButtonRight>
    </MemberShipContainer>
  );
};
