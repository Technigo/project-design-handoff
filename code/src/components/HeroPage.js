import React from 'react';
import styled from 'styled-components';
import { RxMagnifyingGlass } from 'react-icons/rx';
import heroImage2 from '../assets2/croppedHero.jpg';
import heroImage from '../assets2/HeroImage.jpg';
import LoadingPageText from './LoadingPageText';

const HeroPage = () => {
  return (
    <div className="header-outer-wrapper">
      <Header>
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" style={{ marginTop: '5%', marginLeft: '5%', position: 'absolute' }} />
        <RxMagnifyingGlass className="search-icon" />
        <div className="header-inner-wrapper">
          <LoadingPageText />
        </div>
      </Header>
    </div>
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
    background-position: left;
    }
};

.search-icon {
  font-size: 2rem;
  color: white;
  margin-left: 75%;
  margin-top: 7%;
  
  @media (min-width: 640px){
    margin-left: 85%;
    margin-top: 5%;
    }
}
`;

export default HeroPage;
