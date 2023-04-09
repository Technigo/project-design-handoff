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
  position: relative; /* add position relative to make the hero-image position absolute within this element */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 110vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${heroImage2});
    background-size: cover;
    background-position: center;
    z-index: -1; /* set a negative z-index to place it behind the navbar */
  }

  @media (min-width: 640px){
    &::before {
      background-image: url(${heroImage});
      background-position: left;
    }
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
  @media (min-width: 1024px){
    display:none;
  }
}
`;

export default HeroPage;

