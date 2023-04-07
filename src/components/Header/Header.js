import React from 'react';
import styled from 'styled-components';
import { SignUpBtn } from '../Buttons'
// import { Navbar } from './Navbar'
import './Header.css';

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px;
`
const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Header = () => {
  return (
    <Navigation>
      <Logo>
        <img src="./logo/Logo.svg" alt="Logo" />
        <i className="fa-sharp fa-solid fa-magnifying-glass" />
      </Logo>
      <section className="intro-text">
        <p>Santulan Power Yoga Stockholm</p>
        <h1>Move your body <br />
          Rest your mind
        </h1>
        <SignUpBtn />
        <p>Want to know more about us?</p>
      </section>
    </Navigation>
  )
}