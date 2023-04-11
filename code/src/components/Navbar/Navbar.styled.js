import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const HeaderLogo = styled.img`
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

export const HeaderLogoFull = styled.img`
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

export const UlElements = styled.ul`
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

export const LiElements = styled.li`
  list-style-type: none;
  margin: 3px;

  a {
    display: block;
    padding: 10px;
    color: var(--neutralBlack);
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid var(--neutralBlack);
    &:hover {
      text-decoration: underline 3px var(--primaryPink);
    }

    @media (min-width: 668px) {
      text-transform: none;
      border-bottom: none;
      margin-top: 30px;
      &:active {
        color: var(--primaryPink);
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

export const ToggleButton = styled.button`
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

export const CloseIcon = styled.img`
  color: var(--neutralBlack);
`;

export const MenuIcon = styled.img`
  color: var(--neutralBlack);
`;

export const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
    position: fixed;
    right: 0;
    width: 40%;
    min-height: 60vh;
    overflow: hidden;
    background-color: var(--neutralWhite);
    z-index: 9;
    transition: all 0.5s ease-in-out;
    ${(props) => !props.isOpen
      && `
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
