import React from 'react';
import styled from 'styled-components';
import { FlexColumnCenter } from 'style/Flex';
import { Benefits } from './Benefits';
import { Workout } from './Workouts';
import { Activity } from './Activity';
import { Community } from './Communnity';

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 2%;
    border-radius: 50px;
    position: fixed;
    justify-content: space-between;
    z-index: 1;
    background-color: #222322;
    width: 80%;
    bottom: 20px;
`
const NavbarLink = styled.a`
    color: #fff;
    font-family: 'Karla', sans-serif;
    font-size: 12px;
    width: 100%;
    text-align: center;
`

export const Navbar = () => {
  return (
    <FlexColumnCenter>
      <NavbarWrapper>
        <>
          <NavbarLink href={Benefits}>Benefits</NavbarLink>
          <NavbarLink href={Workout}>Programs</NavbarLink>
          <NavbarLink href={Activity}>Activity</NavbarLink>
          <NavbarLink href={Community}>Plans</NavbarLink>
        </>
      </NavbarWrapper>
    </FlexColumnCenter>
  )
}