import React from 'react';
import { NavBlack, NavLink } from '../styles/Header'

export const NavBarSticky = () => {
  return (
    <NavBlack>
      <NavLink href="/" width="57.484px">Benefits</NavLink>
      <NavLink href="/" width="65.984px">Workouts</NavLink>
      <NavLink href="/" width="53.039px">Activity</NavLink>
      <NavLink href="/" width="79.414px">Community</NavLink>
    </NavBlack>
  )
}