/* eslint-disable  */

import React, { useState } from 'react';
import styled from 'styled-components';
import Flexable from '../images/1.png';
import Basic from '../images/2.png';
import Grow from '../images/3.jpg';
import Leftarrow from '../images/left-arrow.png';
import Rightarrow from '../images/right-arrow.png';

const items = [
  { image: Flexable, header: 'BE FLEXABLE', access: 'PAY WHEN YOU PRACTICE', price: '2499 SEK/PER MONTH' },
  { image: Basic, header: 'BASIC', access: 'ACCESS ALL OUR IN-STUDIO', price: '899 SEK/PER MONTH' },
  { image: Grow, header: 'GROW', access: 'ACCESS ALL OUR IN-STUDIO AND ONLINE CLASSES', price: '1899 SEK/PER MONTH' }
];

const MemberShipContainer = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  position: relative;
  @media (min-width: 600px){
    display: none;
  }
`;

const SliderItemContainer = styled.div`
  width: 288px;
  height: 427px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #025323;
  border-radius: 16.8246px;
  margin-bottom: 46px;
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
  @media (min-width: 992px){
    font-size: 54px;
    line-height: 65px;
  }
  @media (min-width: 600px){
    font-size: 42px;
    line-height: 51px;
  }
`;

const Content = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 167.5%;
  text-align: center;
  @media (min-width: 992px){
    font-size: 22px;
    line-height: 167.5%; 

  }


`;
export const Image = styled.img`
  width: 284px;
  height: 201px;
  object-fit: cover;
  border-radius: 16.8246px;
  @media (min-width: 992px){
    width: 311.13px;
    height: 205.91px;
  }
  @media (min-width: 600px){
    width: 255.7px;
    height: 173px;
  }
 
`;
const Wrapper = styled.div`
  align-items: left;
  width: 288.54px;
  padding-left: 16px;
  margin-bottom: 25px;
  @media (min-width: 992px){
    padding-left: 35px;

  }
  @media (min-width: 600px){
    padding-left: 30px;
    
  }
`
const Header = styled.h2`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #025323;
  @media (min-width: 992px){
    font-size: 22px;
    line-height: 27px;  
  }

`;
const Access = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: #025323;
  margin:0px;
  @media (min-width: 992px){
    font-size: 11px;
    line-height: 13px;
    
  }
  @media (min-width: 600px){
    font-size: 10px;
    line-height: 12px;
  }
`;
const Price = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-right: 10px;
  @media (min-width: 992px){
    font-size: 16px;
    line-height: 19px;
  }

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

  @media (min-width: 600px){
    width: 244px;
    height: 55px;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 29px; 
  }
  @media (min-width: 992px){
    width: 244px;
    height: 59px; 
    margin-bottom :7px;
  }
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
  left: 15px;
  @media (min-width: 600px){}
  @media (min-width: 992px){
    top: 40%;
    left: 25%;
  }
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
  position: absolute;
  top: 60%;
  right: 15px;
  @media (min-width: 600px){}
  @media (min-width: 992px){
    top: 40%;
    right: 25%;
  }
`;
const OptionalContainer = styled.div`
  @media (min-width: 992px){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  padding: 10% 0;
  }
  @media (max-width: 600px){
    display: none; 
  }
  

`
const ClassWrapper = styled.div`
   display: flex;
   flex-direction: row;
   position: relative;
   
`
const Class = styled.div`
  @media (min-width: 992px){
    Width: 311.13px;
    Height: 460.8px;
  }
  @media (min-width: 600px){
    width: 262.64px;
    height: 388.99px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EBEBEB;
    border: 2.52369px solid #025323;
    border-radius: 16.8246px;
    margin: 15px;
  }
   &:hover {
    transform: scale(1.1);
  }
  
`
export const Membership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
    <MemberShipContainer>
      <Title>Sign up for membership</Title>
      <Content>Most classes are 30 minutes and serivel of them can been taken online</Content>
      
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
        <img src={Leftarrow} alt="left"/>
      </ArrowButtonLeft>
      <ArrowButtonRight onClick={handleNextClick}>
        <img src={Rightarrow} alt="right"/>
      </ArrowButtonRight>
    </MemberShipContainer>

    <OptionalContainer>
       <Title>Sign up for membership</Title>
       <Content>Most classes are 30 minutes and serivel of them can been taken online</Content>
       <ClassWrapper>
          <Class>
            <Image src={items[0].image} alt="carousel item" />
            <Wrapper>
              <Header>{items[0].header}</Header>
              <Access>{items[0].access}</Access>
            </Wrapper>
            <Price>{items[0].price}</Price>
            <Button type="button">Buy Now</Button>
        </Class>
        <Class>
            <Image src={items[1].image} alt="carousel item" />
            <Wrapper>
              <Header>{items[1].header}</Header>
              <Access>{items[1].access}</Access>
            </Wrapper>
            <Price>{items[1].price}</Price>
            <Button type="button">Buy Now</Button>
        </Class>
        <Class>
            <Image src={items[2].image} alt="carousel item" />
            <Wrapper>
              <Header>{items[2].header}</Header>
              <Access>{items[2].access}</Access>
            </Wrapper>
            <Price>{items[2].price}</Price>
            <Button type="button">Buy Now</Button>
          </Class>
       </ClassWrapper> 
    </OptionalContainer>
    </>
  );
};

