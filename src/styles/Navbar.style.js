import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
background-color: black;
display: flex;
flex-direction: column;
color: white;
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
background-color: red;
`;

export const RightContainer = styled.div`
flex: 30%;
display: flex;
align-items: flex-end;
padding-left: 50px;
background-color: salmon;
`;

export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
flex: display;
`;

export const NavbarLinkContainer = styled.div`
display: flex;
`;

export const NavbarLink = styled(Link)`
color: white;
font-size: x-large;
font-family: Roboto;
text-decoration: none;
margin: 10px;
`;

/* Below is outcommented for now as I don't have a logo yet */
// export const Logo = styled.img`
// margin: 10px;
// max-width: 180px;
// height: auto;
// `;

export const NavbarExtendedContainer = styled.div`
`;