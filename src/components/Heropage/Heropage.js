import React, { useState } from 'react';
import logofirstpage from '../../assets/logofirspage.svg'
import ListEBlue from '../../assets/Listelippsisblue.svg'
import ListEGreen from '../../assets/Listelippsisgreen.svg'
import { BtnJoin } from './BtnJoin'
import { Slogan } from './Slogan'
import { Parentdiv, Logo, TopWrapper, Navbar, HambMenuBtn, HambMenuIcon, HambMenuList, HambMenuListOpen, HambMenuItem, HambMenuItemLink, HambMenuIconOpen, LiElipblue, LiElipgreen } from './HeropageCSS';

export const Heropage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Parentdiv>
      <TopWrapper>
        <Logo src={`${logofirstpage}`} alt="logo of the page" />
        <Navbar>
          <HambMenuBtn onClick={() => setOpen(!open)}>
            <HambMenuIcon isOpen={open} />
            <HambMenuIconOpen isOpen={open} />
          </HambMenuBtn>
          {open ? (
            <HambMenuListOpen>
              <HambMenuItem><LiElipblue src={`${ListEBlue}`} /><HambMenuItemLink href="#">Classes</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><LiElipgreen src={`${ListEGreen}`} /><HambMenuItemLink href="#">Membership</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><LiElipblue src={`${ListEBlue}`} /><HambMenuItemLink href="#">About us</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><LiElipgreen src={`${ListEGreen}`} /><HambMenuItemLink href="#">Contact</HambMenuItemLink></HambMenuItem>
              <HambMenuItem><LiElipblue src={`${ListEBlue}`} /><HambMenuItemLink href="#">More</HambMenuItemLink></HambMenuItem>
            </HambMenuListOpen>
          ) : (
            <HambMenuList />
          )}
        </Navbar>
      </TopWrapper>
      <BtnJoin />
      <Slogan />
    </Parentdiv>
  )
}
