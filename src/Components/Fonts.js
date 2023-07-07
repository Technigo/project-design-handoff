import styled from 'styled-components';

export const HeaderTitle = styled.h1`
font-size: 48px;
text-align: center;
font-style: bold;
color: white;

@media (min-width: 1024px) {
    font-size: 56px;
    font-weight: bold;
}
`

export const BigBlackTitle = styled.h1`
font-size: 50px;
color: black;
padding-bottom: 45px;
`

export const YellowTitle = styled.h2`
font-size: 24px;
font-weight: 500;
line-height: 27px;
color: #FF9F0A;

@media (min-width: 1024px) {
    font-size: 32px;
    line-height: 36px;
}
`

export const SmallBlackTitle = styled.h3`
font-size: 24px;
font-weight: bold;
color: black;
`

export const BlueParagraph = styled.p`
font-size: 24px;
color: #89D6E8;
width: 522px;
height: 80px;
display: flex;
text-align: center;
display: none;
padding-bottom: 15px;

@media (min-width: 1024px) {
    display: inline-block;
}
`

export const WhiteParagraph = styled.p`
font-size: 16px;
color: white;
font-weight: 400;
line-height: 20px;

@media (min-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
}
`

export const NavLink = styled.p`
font-size: 16px;
color: white;
font-weight: 400;
line-height: 20px;
cursor: pointer;
`

export const ReviewParagraph = styled.p`
font-size: 16px;
color: white;
font-weight: 600;
line-height: 26px;
`

export const NavLinks = styled.p`
font-size: 16px;
color: white;

@media (min-width: 1024px) {
    font-size: 24px;
}`