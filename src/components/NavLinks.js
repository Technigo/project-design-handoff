import React from 'react';
import styled from 'styled-components';

const NavItem = styled.a`
  margin-left: 60%;
  text-decoration: none;
  color: white;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;

const NavItems = () => {
  return (
    <>
      <NavItem href="#">Our Vision</NavItem>
      <NavItem href="#">Our Programs</NavItem>
      <NavItem href="#">Price Plans</NavItem>
      <NavItem href="#">Contact Us</NavItem>
    </>
  )
}
export default NavItems;