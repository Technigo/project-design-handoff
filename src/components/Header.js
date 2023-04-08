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
  padding: 4rem; /* Add padding to adjust the spacing */
  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
  min-height: 100vh;
  width: 100%;
  background-position: left;
}

 @media screen and (min-width: 1440px) {
    min-height: 95vh;
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
margin-left: 6rem;
margin-top: 15%;
color: #E3F7FC;
padding-left: 2rem;

@media screen and (max-width: 768px) {
    width: 65%;
    margin-left: auto; 
    padding: 0 3rem; /* Add padding to adjust the spacing */
    flex-direction: column; /* Display as a column */
    align-items: flex-end;
    color: #E3F7FC;
    transform: translateX(-40%);
    margin-top: 3%;
    font-size: 0.5rem;
    text-align: left;
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
    width: 60%; 
    margin: 0 auto; 
    flex-direction: column;
    color: #E3F7FC;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 2rem;
  }
`;

const StyledTitle = styled.h1`
font-size:2.5rem;
font-weight: bold;
word-break: break-word;
margin-bottom: 4rem;

@media screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: 6rem;
    margin-bottom: 2rem;
    word-wrap: break-word;
    font-size:2rem;
  }

 @media screen and (min-width: 1440px) {
    margin-top: 22rem;
    flex: 0.4;
  }

   @media screen and (min-width: 1632px) {
    margin-top: 90%;
  }
`;

const StyledDescription = styled.p`
font-size: 1.25rem;
line-height: 1.5;
flex: 0.6;
word-break: break-word;
margin-top: 1rem;

@media screen and (max-width: 768px) { 
  margin-left: 0;
  line-height: 1;
}
`;

const ButtonAndTextContainer = styled.div`
display: flex;
width: 100%;
gap: 20px;
font-weight: bold;
margin-bottom: 2rem;


@media screen and (max-width: 768px) {
  gap: 0;
  flex-direction: column-reverse;
}
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
