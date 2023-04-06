import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets2/HeroImage.jpg';
import NavBar from './NavBar/NavBar';
import LoadingPageText from './LoadingPageText';

const HeroPage = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <Header className="header-outer-wrapper">
      <Container className="header-inner-wrapper">
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" />
        <div>
          <img src="../assets/magnifying-glass.png" alt="magnifying glass" />
        </div>
        <NavBar />
        <LoadingPageText />
        <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>
      </Container>
    </Header>
  )
};
const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
`;
const Container = styled.section`
  width:100vw;
  display: flex;
  align-items: flex-start;
  
`;

export default HeroPage;
