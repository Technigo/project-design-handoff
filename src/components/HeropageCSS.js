/* import React from 'react'; */
import styled from 'styled-components';
import heroimg from '../assets/hero.svg'

export const Parentdiv = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${heroimg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const Logo = styled.img`
height: 6%;
width: 21.5%;
margin-top: 4%;
`

export const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 4.5%;
margin-top: 0;
`

export const Navbar = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-top: 4%;
align-items: flex-end 4.5% !important;
align-items: flex-end;
`

export const HambMenuBtn = styled.button`
position: relative;
width: 50px;
height: 50px;
border: none;
background-color: #0962CF;
cursor: pointer;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
    z-index: 1;
`

export const HambMenuIcon = styled.span`
  position: absolute;
  width: 59%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: white;
  border-radius: 10px;

  &:before {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    content: '';
    top: -8px;
    border-radius: 10px;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    content: '';
    bottom: -8px;
    border-radius: 10px;
  }

  ${({ isOpen }) => isOpen && `
    display: none;
  `}
`;

export const HambMenuIconOpen = styled.span`
  display: none;

  ${({ isOpen }) => isOpen && `
    display: block;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 70%;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
      top: 0;
      left: 0;
      transform: rotate(-90deg);
      border-radius: 10px;
    }
  `}
`;

export const HambMenuList = styled.ul`
    display: none;
    top: 100%;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
    `
export const HambMenuListOpen = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.85);
    width: 214px;
    height: 344px;
    position: relative;
    top: -19%;
    right: -7%;
`

export const HambMenuItem = styled.li`
    list-style: none;
    margin: 8px;
`

export const Lielipblue = styled.img`
    scale: 1;
`

export const Lielipgreen = styled.img`
    scale: 1;
`

export const HambMenuItemLink = styled.a`
font-family: Kulim Park;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 12px;
letter-spacing: -0.022em;
color: #0962CF;
text-decoration: none;
margin: 20px;
`