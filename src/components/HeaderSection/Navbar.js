import styled from 'styled-components';

export const Navbar = styled.div`
display: flex;
justify-content: space-between;
height:63px;
width: 90%;
align-items:center;
  @media (min-width: 1024px) {
  }
`;

export const Logo = styled.img`
width:5.5em;
height:2.8em;
filter: drop-shadow(0px 3.08772px 3.08772px rgba(0, 0, 0, 0.25));
  @media (min-width: 1024px) {
  width:7.5em;
  height:3.6em;
  }
`;

export const HamburgerIcon = styled.button`
width: 2em;
height: 2em;
color:#FFFFFF;
align-self:center;
  @media (min-width: 1024px) {
  height:2.5em;
  }
   @media (min-width: 1444px) {
  display:none;
  }
`;

export const NavbarOptions = styled.div`
display:${(props) => (props.show ? 'flex' : 'none')};
flex-direction:column;
`;

export const NavbarOption = styled.div`
font-size:0.8rem;
`;

export const ContainerNavbar = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items:center;
width:100%;
gap:34px;

  @media (min-width: 1024px) {
  }
`;
