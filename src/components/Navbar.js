import React from 'react';
import styled from 'styled-components';
import SiteLogo from '../images/logo.svg';
import SearchIcon from '../images/search.svg';
import BurgerIcon from '../images/Hamburger.svg'

const Nav = styled.nav`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  height: 85px;
  width: 100vw;
  max-width: 1400px;
  background-color: white;
  z-index: 10;

  @media (min-width: 744px) {
    position: absolute;
    background-color: transparent;
    margin-top: 1.5rem;
}
`;

const Logo = styled.img`
  width: 46px;
  padding-left: 3rem;
  @media (min-width: 744px) {
    width: 77px;
}
`;

const Search = styled.img`
  height: 23px;
  margin-right: 2rem;

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
      <Logo src={SiteLogo} alt="logo" />
      <StyledList>
        <li>Home</li>
        <li>About</li>
        <li>Event & workshops</li>
        <li>Schedule</li>
        <li>Membership</li>
      </StyledList>
      <NavContainer>
        <Search src={SearchIcon} alt="looking glass" />
        <Hamburger src={BurgerIcon} alt="hamburger menu icon" />
      </NavContainer>
    </Nav>
  )
}

export default Navbar;
