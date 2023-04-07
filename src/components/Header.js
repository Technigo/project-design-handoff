/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useSticky from './useSticky';
import { TopRightButton, BottomCenterButton, TopLeftLogo } from './Global';
import { StickyNav, NavItem, MobileNavIcon, MobileNavItem } from './Navbar';
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo.svg';
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
  min-height: 60vh;

  @media screen and (max-width: 768px) {
  min-height: 100vh;
  width: 100%;
}

 @media screen and (min-width: 1440px) {
    min-height: 90vh;
  }

   @media screen and (min-width: 1632px) {
    min-height: 100vh;
  }

  @media screen and (max-width: 1024px) {
    min-height: 80vh;
  }
`;

const TitleContainer = styled.div`
position: absolute;
width: 15%;
margin-left: 6rem;
margin-top: 15%;
color: #03092E;
padding-left: 2rem;

@media screen and (max-width: 768px) {
    width: 80%; /* Adjust width to fit the screen */
    margin-left: auto; /* Center the container horizontally */
    padding: 0 1rem; /* Add padding to adjust the spacing */
    flex-direction: column; /* Display as a column */
    align-items: flex-end;
    color: #E3F7FC;
  }
`;

const DescriptionContainer = styled.div`
width: 35%;
margin-top: 60%;
margin-left: 25rem;
position: absolute;
bottom: 0;

@media screen and (max-width: 768px) {
    width: 80%; /* Adjust width to fit the screen */
    margin-left: auto; /* Center the container horizontally */
    padding: 0 1rem; /* Add padding to adjust the spacing */
    flex-direction: column; /* Display as a column */
    align-items: flex-end;
    color: #E3F7FC;
  }
`;

const StyledTitle = styled.h1`
font-size:2.5rem;
font-weight: bold;
flex: 0.4;
word-break: break-word;
margin-top: 0;  /*Reset top margin */
`;

const StyledDescription = styled.p`
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

const Title = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
};

const Description = ({ text }) => {
  return (
    <StyledDescription>{text}</StyledDescription>
  );
};

const Header = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <div>
      <StickyNav ref={stickyRef} className={classNames({ sticky })}>
        <div>
          <TopLeftLogo src={logo} alt="logo" />
          <MobileNavIcon>
            <FontAwesomeIcon icon={faBars} />
          </MobileNavIcon>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Coaches</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Club</NavItem>
          <TopRightButton>Try for Free</TopRightButton>
          <MobileNavItem>About</MobileNavItem>
          <MobileNavItem>Services</MobileNavItem>
          <MobileNavItem>Contact</MobileNavItem>
        </div>
      </StickyNav>
      <HeroContainer image={heroImage}>
        <TitleContainer>
          <Title text="Online Healthy Diet Strong Body" />
        </TitleContainer>
        <DescriptionContainer>
          <Description text="Level up your life to the happier and healthier with help of the
          certified personal trainers and nutrition coaches based on your personal circumstance" />
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
