import styled from 'styled-components';

export const Navbar = styled.div`
display: flex;
justify-content: space-between;
height:63px;
align-items:center;
width:100%;
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`;

export const Logo = styled.img`
width:88px;
height:44.77px;
`;

export const HamburgerIcon = styled.button`
width: 30px;
height: 30px;
color:#FFFFFF;
`;

export const NavbarOptions = styled.div`
display:${(props) => (props.show ? 'flex' : 'none')};
flex-direction:column;
`;

export const NavbarOption = styled.div`
font-size:0.8rem;
`;
