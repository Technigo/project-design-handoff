import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #03092E; */
  background-color: transparent;
  color: #fff;
  height: 5rem;
  padding: 0 2rem;
  width: 100%;
  z-index: 1;
`;

export const StickyNav = styled(Nav)`
  position: absolute;
  top: 0;
  transition: top 0.3s ease-in-out;

  &.sticky {
    position: fixed;
    top: 0;
  }

    @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 1.2rem;

  text-decoration: none;
  color: #fff;
  margin-right: 2rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    font-size: 1.2rem;
    color: #fff;
    margin-right: 2rem;
    cursor: pointer;
  }
`;