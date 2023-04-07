import React from 'react';
import styled from 'styled-components';
import { SignUpBtn } from '../Buttons'
import { Menu } from './Navbar'
import './Header.css';

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px;
    cursor: pointer;

    i {
      font-size: 20px;
      margin-right: 80px;
      padding-top: 18px
    }
    @media (min-width: 895px) {
      i {
      margin-right: 40px;
      padding-top: 20px
      }
    }
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
        <Menu />
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