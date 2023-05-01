import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
width: 100%;
display: flex;
flex-direction: column;
color: white;

`;

export const LeftContainer = styled.div`
display: flex;
padding-left: 5%


`;

export const RightContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: flex-end;
width: 100%;

`;

export const NavbarInnerContainer = styled.div`
width: 100%;

`;

export const NavbarLinkContainer = styled.div`
display: flex;
`;

export const NavLink = styled(Link)`
color: black;
font-size: 1rem;
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