import React from 'react';
import styled from 'styled-components';
import { LogoIcon, LogoText } from '../Logos'
import './footer.css';

const Logo = styled.div`
    background-color: #2E160E;
    color: #fff;

    img {
        height: 48px;
        padding-top: 20px;
    }

    hr {
        margin: 20px 50px;
    }
`
const NavFoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    ul {
      display: flex;
      gap: 3rem;
      list-style: none;
      margin-top: 20px;
    }

    a {
     font-size: 12px;
     font-weight: 400;
     color: #fff;
     text-decoration: none;
     cursor: pointer;
    }

    a:hover {
     opacity: 70%;
    }
`

const IconSome = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 20px;

    i {
     font-size: 20px;
     color: #fff;
     cursor: pointer;
    }

    i:hover {
     opacity: 70%;
    }
`

export const Foot = () => {
  return (
    <Logo>
      <LogoIcon />
      <LogoText />
      <NavFoot>
        <ul>
          <li><a href="#">Classes</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </NavFoot>
      <hr />
      <IconSome>
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-twitter" />
      </IconSome>
    </Logo>
  )
}