/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { TopRightButton, BottomCenterButton, TopLeftLogo } from './Global'
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo.svg';
import { Nav, NavItem } from './Navbar';
/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-magnifying-glass" /> */
/* <FontAwesomeIcon icon="fa-sharp fa-light fa-xmark" /> */

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  object-fit: cover;
  position: relative; /* Add position relative to the container */
  padding-bottom: 4rem; /* Add padding to adjust the spacing */
  min-height: 90vh;
`;

const TitleContainer = styled.div`
position: absolute;
width: 15%;
margin-left: 6rem;
margin-top: 45%;
color: #03092E;
padding-left: 2rem;
`;

const DescriptionContainer = styled.div`
width: 35%;
margin-top: 55%;
margin-left: 25rem;
position: absolute;
`

const Title = styled.h1`
font-size:2.5rem;
font-weight: bold;
flex: 0.4;
word-break: break-word;
margin-top: 0;  /*Reset top margin */
`;

const Description = styled.p`
font-size: 1.25rem;
line-height: 1.5;
flex: 0.6;
word-break: break-word;
margin-top: 0; /* Reset top margin */
`;

const ButtonAndTextContainer = styled.div`
display: flex;
width: 100%;
gap: 20px;
font-weight: bold;
`
const UserText = styled.p`
font-size: 20px;
`;

const TrainerText = styled.p`
font-size: 20px;
flex-grow: 1;
`;

const ActiveUsers = styled.span`
 display: block;
 font-size: 22px;
 flex-grow: 1;
`;

const ActiveTrainers = styled.span`
 display: block;
 font-size: 22px;
 flex-grow: 1;
`;

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <TopLeftLogo src={logo} alt="logo" />
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Coaches</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Club</NavItem>
          <TopRightButton>Try for Free</TopRightButton>
        </div>
      </Nav>
      <HeroContainer image={heroImage}>
        <TitleContainer>
          <Title>Online Healthy Diet Strong Body</Title>
        </TitleContainer>
        <DescriptionContainer>
          <Description>Level up your life to the happier and healthier with help of the
          certified personal trainers and nutrition coaches based on your personal circumstance
          </Description>
          <ButtonAndTextContainer>
            <BottomCenterButton>Try for Free</BottomCenterButton>
            <UserText>
              <ActiveUsers>1250+</ActiveUsers> active users
            </UserText>
            <TrainerText>
              <ActiveTrainers>50+</ActiveTrainers>personal trainers
            </TrainerText>
          </ButtonAndTextContainer>
        </DescriptionContainer>
      </HeroContainer>
    </div>
  );
};

export default Header;
