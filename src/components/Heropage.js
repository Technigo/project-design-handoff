import React, { useState } from 'react';
import logofirstpage from '../assets/logofirspage.svg'
import { Parentdiv, Logo, TopWrapper, Navbar, HambMenuBtn, HambMenuIcon, HambMenuList, HambMenuListOpen, HambMenuItem, HambMenuItemLink } from './HeropageCSS';

export const Heropage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Parentdiv>
      <TopWrapper>
        <Logo src={`${logofirstpage}`} alt="logo of the page" />
        <Navbar>
          <HambMenuBtn onClick={() => setOpen(!open)}>
            <HambMenuIcon />
          </HambMenuBtn>
          {open ? (
            <HambMenuListOpen>
              <HambMenuItem><a href="#">Item 1</a></HambMenuItem>
              <HambMenuItem><a href="#">Item 2</a></HambMenuItem>
              <HambMenuItem><a href="#">Item 3</a></HambMenuItem>
            </HambMenuListOpen>
          ) : (
            <HambMenuList>
              <HambMenuItem><HambMenuItemLink href="#">Item 1</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><HambMenuItemLink href="#">Item 2</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><HambMenuItemLink href="#">Item 3</HambMenuItemLink></HambMenuItem>
            </HambMenuList>
          )}
        </Navbar>
      </TopWrapper>
    </Parentdiv>
  )
}
