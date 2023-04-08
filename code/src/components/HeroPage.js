import React from 'react';
import styled from 'styled-components';
import heroImage2 from '../assets2/croppedHero.jpg';
import heroImage from '../assets2/HeroImage.jpg';
import LoadingPageText from './LoadingPageText';

const HeroPage = () => {
  return (
    <Header className="header-outer-wrapper">
      <div className="header-inner-wrapper">
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" style={{ marginTop: '5%', marginLeft: '5%', position: 'absolute' }} />
        <LoadingPageText />
      </div>
    </Header>
  )
};
const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 110vh;
  background-image: url(${heroImage2});
  background-size: cover;
  background-position: center;
  
  @media (min-width: 640px){
    background-image: url(${heroImage});
    }
`;

export default HeroPage;
