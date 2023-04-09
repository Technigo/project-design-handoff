import styled from 'styled-components';

export const DesktopNavItems = styled.div`
display:block;
`;

export const MobileQuery = styled(DesktopNavItems)`
 @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
  color: #E3F7FC;
  height: 5rem;
  padding: 0 2rem;
  z-index: 1;
  width: 83%;
`;

export const StickyNav = styled(Nav)`
  position: absolute;
  top: 0;
  transition: top 0.3s ease-in-out;

  &.sticky {
    position: fixed;
    top: 0;
  }
`;

export const NavItem = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #E3F7FC;
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
    color: #E3F7FC;
    cursor: pointer;
    margin-right: -14rem;
  }
`;