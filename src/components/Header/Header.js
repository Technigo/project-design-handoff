import React from 'react';
import styled from 'styled-components';
import { SignUpBtn } from '../Buttons'
import { Menu } from './Navbar'
import { MenuDeskTop } from './MenuDesk'
import { LogoTop, LogoText } from '../Logos'
import './Header.css';

const LogoSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px;
    cursor: pointer;
`
const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Header = () => {
  return (
    <Navigation>
      <LogoSection>
        <LogoTop />
        <LogoText />
        <Menu />
        <MenuDeskTop />
      </LogoSection>
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