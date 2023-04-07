import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderLogo = styled.img`
  @media (max-width: 667px) {
    display: flex;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: 20px;
    }

    @media (min-width: 668px) {
      display: none;
    }
`;

const HeaderLogoFull = styled.img`
  @media (max-width: 667px) {
    display: none;
  }

  @media (min-width: 668px) {
    width: 180px;
    height: 77px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const UlElements = styled.ul`
  display: flex;

  @media (max-width: 667px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

  @media (min-width: 668px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LiElements = styled.li`
  list-style-type: none;
  margin: 3px;

  a {
    display: block;
    padding: 10px;
    color: var(--neutral-dark);
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid var(--neutral-dark);

    &:hover {
      text-decoration: underline 3px var(--primary-color-4);
    }

    @media (min-width: 668px) {
      text-transform: none;
      border-bottom: none;
      margin-top: 30px;

      &:active {
      color: var(--primary-color-4);
    }
  }


  @media (min-width: 668px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 29px;
  }
}
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 667px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 10;
  }
`;

const CloseIcon = styled.img`
  color: var(--neutral-dark);
`;

const MenuIcon = styled.img`
  color: var(--neutral-dark);
`;

const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
    position: fixed;
    right: 0;
    width: 40%;
    min-height: 60vh;
    overflow: hidden;
    background-color: var(--neutral-light);
    z-index: 9;
    transition: all 0.5s ease-in-out;

    ${(props) => !props.isOpen && `
      display: none;
    `}
  }

  @media (min-width: 668px) {
    justify-content: flex-end;
    margin-right: 25px;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    margin-right: 0;
  }
`;

export const NavBar = ({ navOne, navTwo, navThree, navFour, navFive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <StyledNavBar>
      <HeaderLogo
        src={`${process.env.PUBLIC_URL}/assets/logo-img.png`}
        alt="Logo for Cross Park" />
      <HeaderLogoFull
        src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
        alt="Logo for Cross Park" />
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon
          src={`${process.env.PUBLIC_URL}/assets/x.png`}
          alt="Logo that says sign up" />
          : <MenuIcon
            // eslint-disable-next-line react/jsx-indent-props
            src={`${process.env.PUBLIC_URL}/assets/Hamburger_icon.png`}
            // eslint-disable-next-line react/jsx-indent-props
            alt="Logo that says sign up" />}
      </ToggleButton>
      <MenuNav ref={navRef} isOpen={isOpen}>
        <UlElements>
          <LiElements>
            <a href="#!">{navOne}</a>
          </LiElements>
          <LiElements>
            <a href="#!">{navTwo}</a>
          </LiElements>
          <LiElements>
            <a href="#!">{navThree}</a>
          </LiElements>
          <LiElements>
            <a href="#!">{navFour}</a>
          </LiElements>
          <LiElements>
            <a href="#!">{navFive}</a>
          </LiElements>
        </UlElements>
      </MenuNav>
    </StyledNavBar>
  );
};