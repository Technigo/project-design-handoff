import React from 'react';
import styled from 'styled-components';
import './Header.css';

const Logo = styled.img`
    width: 35px;
    height: 48px;
`

export const Header = () => {
  return (
    <section className="navbar-cont">
      <div className="logo-cont">
        <Logo src="/logo/logo.svg" />
        <p className="small-text">Santulan Power Yoga Stockholm</p>
        <h1>Move your body <br />
          Rest your mind
        </h1>
      </div>
    </section>
  )
}