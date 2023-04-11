/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import useSticky from './useSticky';
import { TopRightButton, BottomCenterButton, TopLeftLogo } from './Global';
import { MobileQuery, StickyNav, NavItem, MobileNavIcon } from './Navbar';
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo.svg';

const HeaderContainer = styled.div`
width: 100%;
box-sizing: border-box; 
`;

const HeroContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  object-fit: cover;
  position: relative; /* Add position relative to the container */
  min-height: 100vh;
  font-family: 'Helvetica Neue';

  @media screen and (max-width: 768px) {
  min-height: 100vh;
  background-position: left;
}
 @media screen and (min-width: 1440px) {
    min-height: 80vh;
  }
   @media screen and (min-width: 1632px) {
    min-height: 90vh;
  }
  @media screen and (max-width: 1024px) {
    min-height: 80vh;
  }
`;

const TitleContainer = styled.div`
position: absolute;
width: 15%;
margin-top: 20%;
color: #E3F7FC;
padding-left: 2rem;

@media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 3rem; /* Add padding to adjust the spacing */
    flex-direction: column; 
    align-items: flex-end;
    color: #E3F7FC;
    transform: translateX(-40%);
    font-size: 0.5rem;
    text-align: left;
    margin: 6rem 4rem;
  }
`;

const DescriptionContainer = styled.div`
width: 35%;
margin-top: 60%;
margin-left: 25rem;
position: absolute;
bottom: 0;
color: #E3F7FC;

@media screen and (max-width: 768px) {
    width: 80%; 
    max-width: 100%;
    margin-left: 5%;
    flex-direction: column;
    color: #E3F7FC;
    text-align: left;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 2rem;
  }
`;

const StyledTitle = styled.h1`
font-size:2rem;
font-weight: 700;
word-break: break-word;
margin-bottom: 4rem;

@media screen and (max-width: 768px) {
    margin-left: 7rem;
    word-wrap: break-word;
    font-size:1.5rem;
    line-height: 1;
  }
 @media screen and (min-width: 1440px) {
    margin-top: 2rem;
    flex: 0.4;
  }
   @media screen and (min-width: 1632px) {
     margin-top: 20rem;
  }
`;

const StyledDescription = styled.p`
font-size: 1.25rem;
line-height: 1.5;
flex: 0.6;
word-break: break-word;
margin-top: 1rem;
`;

const ButtonAndTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 6rem;

@media screen and (max-width: 768px) {
  gap: 0;
  flex-direction: column-reverse;
  line-height: 1;
  width: 90%;
  margin-bottom: 2rem;
}
`

const UserAndTrainerText = styled.div`
    display: flex;
    gap: 20px;

@media screen and (max-width: 768px) {
  display: flex;
  font-size: 1rem;
}
`
const UserText = styled.p`
font-size: 1rem;

@media screen and (max-width: 768px) {
  font-weight: normal;
  gap: 20px;
}
`;

const TrainerText = styled.p`
font-size: 1rem;
flex-grow: 1;

@media screen and (max-width: 768px) {
  font-weight: normal;
}
`;

const ActiveUsers = styled.span`
 display: block;
 font-size: 1rem;
 flex-grow: 1;
`;

const ActiveTrainers = styled.span`
 display: block;
 font-size: 1rem;
 flex-grow: 1;
`;

// Define a component called Title that accepts a prop called "text"
const Title = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
};

// Define a component called Description that accepts a prop called "text"
const Description = ({ text }) => {
  // Render a StyledDescription component with the "text" prop as its content
  return (
    <StyledDescription>{text}</StyledDescription>
  );
};

const Header = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <HeaderContainer>
      <StickyNav ref={stickyRef} className={classNames({ sticky })}>
        <TopLeftLogo src={logo} alt="logo" />
        <MobileNavIcon>
          <FontAwesomeIcon icon={faBars} />
        </MobileNavIcon>
        <MobileQuery>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Coaches</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Club</NavItem>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <TopRightButton>Try for Free</TopRightButton>
        </MobileQuery>
      </StickyNav>
      <HeroContainer image={heroImage} alt="background image">
        <TitleContainer>
          <Title text="Online Healthy Diet Strong Body" />
        </TitleContainer>
        <DescriptionContainer>
          <Description text="Level up your life to the happier and healthier with help of the
          certified personal trainers and nutrition coaches based on your personal circumstance" />
          <ButtonAndTextContainer>
            <BottomCenterButton>Try for Free</BottomCenterButton>
            <UserAndTrainerText>
              <UserText>
                <ActiveUsers>1250+</ActiveUsers> active users
              </UserText>
              <TrainerText>
                <ActiveTrainers>50+</ActiveTrainers>personal trainers
              </TrainerText>
            </UserAndTrainerText>
          </ButtonAndTextContainer>
        </DescriptionContainer>
      </HeroContainer>
    </HeaderContainer>
  );
};

export default Header;