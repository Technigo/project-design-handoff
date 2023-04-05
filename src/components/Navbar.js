import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  height: 85px;
  width: 100vw;
  background-color: white;

  @media (min-width: 744px) {
    background-color: transparent;
    margin-top: 1.5rem;
}
`;

const Logo = styled.img`
  width: 46px;
  padding-left: 2.4rem;
  @media (min-width: 744px) {
    width: 77px;
}
`;

const Search = styled.img`
  height: 23px;
  padding-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Hamburger = styled.img`
  height: 23px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 968px) {
    display: none; 
}
`;

const NavContainer = styled.div`
padding-right: 1rem;
;`

const StyledList = styled.ul`
display: none;
flex-direction: row;
list-style: none;
color: #025323;
font-size: 22px;
font-weight: 600;

li {
    margin-right: 2rem;
    &:hover {
    cursor: pointer;
  }
}

@media (min-width: 968px) {
    display: flex;
}`

const Navbar = () => {
  return (
    <Nav>
      <Logo src="..//images/Logo.png" alt="logo" />
      <StyledList>
        <li>Home</li>
        <li>About</li>
        <li>Event & workshops</li>
        <li>Schedule</li>
        <li>Membership</li>
      </StyledList>
      <NavContainer>
        <Search src="..//images/search.svg" alt="looking glass" />
        <Hamburger src="..//images/Hamburger Menu.svg" alt="hamburger menu icon" />
      </NavContainer>
    </Nav>
  )
}

export default Navbar;
