import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './Hamburger';
import heroImage from '../assets2/HeroImage.jpg';

const stickyMenu = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <Header className="header-outer-wrapper">
      <Container className="header-inner-wrapper">
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" />

        <nav>
          <a className="navcomp" href="#services">Services</a>
          <a className="navcomp" href="#coaches">Coaches</a>
          <a className="navcomp" href="#about">About</a>
          <a className="navcomp" href="#shop">Shop</a>
          <a className="navcomp" href="#club">Club</a>
        </nav>

        <div>
          <img src="../assets/magnifying-glass.png" alt="magnifying glass" />
        </div>
        <HamburgerMenu />
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
  display: flex;
  align-items: flex-start;
  
`;

export default stickyMenu;
