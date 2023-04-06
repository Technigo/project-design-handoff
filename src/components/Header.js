/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { TopRightButton, BottomCenterButton, TopLeftLogo } from './Global'
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo.svg';
import { Nav, NavItem } from './Navbar';

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  /* justify-content: center; */
  /* align-items: flex-end; Align items to the bottom */
  object-fit: cover;
  position: relative; /* Add position relative to the container */
  padding-bottom: 4rem; /* Add padding to adjust the spacing */
  height: 90vh;
`;

// export const ParentContainer = styled.div`
// display:flex;
// align-items: flex-start;
// position: relative;
// height: 100%;
// `;

const TitleContainer = styled.div`
/* display:flex;
flex-direction: row;
justify-content: space-around; */
/*align-items: center;  Align items vertically */
position: absolute;
width: 15%;
/*padding: 0 2 rem;  Add padding to adjust the spacing */
/* margin-top: -3rem; */
margin-left: 6rem;
/* margin-top: 38rem; */
margin-top: 55%;
color: #03092E;
padding-left: 2rem;
border: solid red 1px;
`;

const DescriptionContainer = styled.div`
/* display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;  */
width: 35%;
/* padding: 0 2 rem; Add padding to adjust the spacing */
margin-top: 68%;
margin-left: 25rem;
border: solid blue 1px;
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
gap: 20px;
`
const UserText = styled.p`
font-size: 20px;
font-weight: bold;
`;

const TrainerText = styled.p`
font-size: 20px;
font-weight: bold;
`;

const ActiveUsers = styled.span`
 display: block;
 font-size: 22px;
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
              <ActiveUsers>50+</ActiveUsers>personal trainers
            </TrainerText>
          </ButtonAndTextContainer>
        </DescriptionContainer>
      </HeroContainer>
    </div>
  );
};

export default Header;
