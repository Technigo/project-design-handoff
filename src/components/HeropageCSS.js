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
margin-left: 4.5%
`

export const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const Navbar = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-top: 4%;
margin-right: 4.5% !important;
align-items: flex-end 4.5% !important;
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
`

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
  align-items: center;
  background: rgba(225, 229, 232, 0.30);
  position: relative;
  margin: auto;
  padding: 5px;
    border-radius: 5px;
    padding-right: 1px;
`

export const HambMenuItem = styled.li`
list-style: none;
`

export const HambMenuItemLink = styled.a`
display: block;
padding: 10px;
text-decoration: none;
color: #000;
font-weight: 500;
font-size: 16px;
`