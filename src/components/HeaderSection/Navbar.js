import styled from 'styled-components';

export const Navbar = styled.div`
display: flex;
justify-content: space-between;
height:63px;
width: 90%;
align-items:center;
padding:10px 16px;
  @media (min-width: 1024px) {
  }
`;

export const Logo = styled.img`
width:88px;
height:44.77px;
filter: drop-shadow(0px 3.08772px 3.08772px rgba(0, 0, 0, 0.25));
`;

export const HamburgerIcon = styled.button`
width: 30px;
height: 30px;
color:#FFFFFF;
align-self:center;
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
