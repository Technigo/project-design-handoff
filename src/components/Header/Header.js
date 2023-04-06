import React from 'react';
import styled from 'styled-components';
import { SignUpBtn } from '../Buttons'
// import { Navbar } from './Navbar'
import './Header.css';

const Logo = styled.img`
    width: 35px;
    height: 48px;
`

export const Header = () => {
  return (
    <section className="navbar-cont">
      <div className="logo-cont">
        <Logo src="./logo/Logo.svg" />
        <Logo src="./logo/Logo.svg" />
      </div>
      <secton className="intro-text">
        <p>Santulan Power Yoga Stockholm</p>
        <h1>Move your body <br />
          Rest your mind
        </h1>
        <SignUpBtn />
        <p>Want to know more about us?</p>
      </secton>
    </section>
  )
}