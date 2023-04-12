/* eslint-disable react/jsx-boolean-value */
import React from 'react'
import { Link } from 'react-scroll';
import { NavBlack, NavWhite, NavLink } from '../styles/Header'

export const NavBarSticky = () => {
  const linkStyleBlack = {
    fontWeight: '600',
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center',
    boxSizing: 'borderBox'
  }

  return (
    <div>
      <NavBlack>
        <NavLink><Link to="#sectionOne" spy={true} smooth={true} href="/#sectionOne" style={{ display: 'none' }}>Hero</Link></NavLink>
        <NavLink width="57.484px"><Link to="#sectionTwo" spy={true} smooth={true} href="/#sectionTwo" style={linkStyleBlack}>Benefits</Link></NavLink>
        <NavLink width="65.984px"><Link to="#sectionThree" spy={true} smooth={true} href="/#sectionThree" style={linkStyleBlack}>Workouts</Link></NavLink>
        <NavLink width="53.039px"><Link to="#sectionFour" spy={true} smooth={true} href="/#sectionFour" style={linkStyleBlack}>Activity</Link></NavLink>
        <NavLink width="79.414px"><Link to="#sectionFive" spy={true} smooth={true} href="/#sectionFive" style={linkStyleBlack}>Community</Link></NavLink>
      </NavBlack>
    </div>
  )
}

export const NavBarTop = () => {
  const linkStyleWhite = {
    fontWeight: '600',
    color: '#222322',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }
  return (
    <NavWhite>
      <NavLink><Link to="#sectionOne" spy={true} smooth={true} href="/#sectionOne" style={{ display: 'none' }}>Hero</Link></NavLink>
      <NavLink width="57.484px"><Link to="#sectionTwo" spy={true} smooth={true} href="/#sectionTwo" style={linkStyleWhite}>Benefits</Link></NavLink>
      <NavLink width="65.984px"><Link to="#sectionThree" spy={true} smooth={true} href="/#sectionThree" style={linkStyleWhite}>Workouts</Link></NavLink>
      <NavLink width="53.039px"><Link to="#sectionFour" spy={true} smooth={true} href="/#sectionFour" style={linkStyleWhite}>Activity</Link></NavLink>
      <NavLink width="79.414px"><Link to="#sectionFive" spy={true} smooth={true} href="/#sectionFive" style={linkStyleWhite}>Community</Link></NavLink>
    </NavWhite>
  )
}
