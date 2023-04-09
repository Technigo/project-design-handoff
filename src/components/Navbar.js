/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styled from 'styled-components';
import ellipseBlue from '../assets/ellipse-blue.svg';
import ellipseGreen from '../assets/ellipse-green.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Hamburger onClick={toggle} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/">{(isOpen ? <img src={ellipseBlue} /> : '')}Classes </Link>
        <Link href="/">{(isOpen ? <img src={ellipseGreen} /> : '')}Membership</Link>
        <Link href="/about">{(isOpen ? <img src={ellipseBlue} /> : '')}About Us</Link>
        <Link href="/contact">{(isOpen ? <img src={ellipseGreen} /> : '')}Contact</Link>
        <Link href="/services">{(isOpen ? <img src={ellipseBlue} /> : '')}More</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: relative;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background:#0962CF;
  width: 44px;
  height: 42.86px;
  border-radius: 4.6px;
  z-index:99;
  position:absolute;
  right:7.4%;
  margin-top:4.7%;


  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    transform-origin: 4px;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width:59.4%;
  

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: relative;
    width:214px;
    height: fit-content;
    background: rgba(255, 255, 255, 0.85);
    /* left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;
    width:fit-content;
    height: 50px;
    background: rgba(255, 255, 255, 0.85) 56%;
    right:0;
  }
`;

const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 75%;
  letter-spacing: -0.022em;
  color: #0962CF;
  display:flex;
  gap:8.4%;
  

  &:hover {
    color: #ff4040;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100%;
    

    &:hover {
      background-color: #ccc;
    }
  }
`;
