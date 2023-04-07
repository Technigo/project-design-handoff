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
      <Hamburger onClick={toggle}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/"><img src={ellipseBlue} /> Classes </Link>
        <Link href="/"><img src={ellipseGreen} />Membership</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">More</Link>
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
`;

// const Logo = styled.a`
//   color: #141414;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   cursor: pointer;
// `;

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
`;

const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  position: relative;
  /* left: 32.24%;
  right: 44.86%;
  top: 23.84%;
  bottom: 72.67%; */
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 75%;
  letter-spacing: -0.022em;
  color: #0962CF;

  &:hover {
    color: #ff4040;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: #ccc;
    }
  }
`;
