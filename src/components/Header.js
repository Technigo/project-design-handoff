import React from 'react'
import { HeaderDesign } from './HeaderDesign'

export const Header = () => {
  return (
    <HeaderDesign>
      <nav>
        <ul className="navLinks">
          <li><a href="">CONTACT</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">ABOUT</a></li>
        </ul>
      </nav>
    </HeaderDesign>
  )
}