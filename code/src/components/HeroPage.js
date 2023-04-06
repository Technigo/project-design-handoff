import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets2/croppedHero.jpg';
import LoadingPageText from './LoadingPageText';

const HeroPage = () => {
  return (
    <Header className="header-outer-wrapper">
      <Container className="header-inner-wrapper">
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" style={{ marginTop: '10px', marginLeft: '10px', position: 'absolute' }} />
        <LoadingPageText />
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
